---
title: Jetson Orin setup
sidebar_position: 7
hide_table_of_contents: false
---

This page documents the current setup path for running [`entrance-observer`](https://github.com/Gratheon/entrance-observer) on an NVIDIA Jetson Orin Nano Super Developer Kit.

## Hardware checklist

- Jetson Orin Nano Super Developer Kit.
- 5 V / 4 A USB-C power supply.
- NVMe SSD installed for OS, Docker images, logs, and video buffering.
- USB UVC camera and lens connected over USB3.
- WiFi module or Ethernet connection.
- Optional display/keyboard for first boot. SSH is preferred after initial setup.

## Base OS

1. Flash the current NVIDIA JetPack image supported by the Orin Nano Super Developer Kit.
2. Boot Jetson and complete first-user setup.
3. Apply system updates:

```bash
sudo apt-get update
sudo apt-get -y upgrade
```

4. Confirm Jetson status:

```bash
sudo apt-get install -y python3-pip
sudo pip3 install -U jetson-stats
sudo reboot

jtop
```

## Install camera and media tools

Install GStreamer support and basic debugging tools:

```bash
sudo apt-get update
sudo apt-get install -y \
  nvidia-l4t-gstreamer \
  gstreamer1.0-tools \
  v4l-utils \
  ffmpeg
```

Check that the camera is visible:

```bash
v4l2-ctl --list-devices
v4l2-ctl --list-formats-ext -d /dev/video0
gst-inspect-1.0
```

Quick camera smoke test:

```bash
ffmpeg -f v4l2 -list_formats all -i /dev/video0
```

## Install Docker

Install Docker from the Ubuntu package feed used for the current JetPack/Ubuntu release. For Ubuntu 22.04 Jammy, the prototype used:

```bash
sudo apt install -y \
  docker-ce=5:27.5.1-1~ubuntu.22.04~jammy \
  docker-ce-cli=5:27.5.1-1~ubuntu.22.04~jammy
```

Allow the current user to run containers without `sudo`:

```bash
sudo usermod -aG docker "$USER"
newgrp docker
docker version
```

If the exact Docker version is no longer available in apt, install the latest version compatible with the JetPack Ubuntu release and record it in deployment notes.

## Configure network DNS

Some local WiFi extenders provide unreliable DNS. Set explicit DNS servers for the active connection if package installs or API calls intermittently fail:

```bash
nmcli connection show
nmcli connection modify "MyWiFi" ipv4.dns "8.8.8.8 1.1.1.1"
sudo systemctl restart NetworkManager
```

For temporary debugging only:

```bash
cat /etc/resolv.conf
```

Avoid manually editing `/etc/resolv.conf` as a permanent fix because NetworkManager/systemd may overwrite it.

## Configure entrance-observer

The edge app needs environment-specific values. Keep secrets out of git and inject them through a local `.env`, Docker secrets, or a deployment manager.

Minimum configuration to document for each installed device:

| Setting | Purpose |
| --- | --- |
| Device ID | Stable identity of the Jetson/observer unit. |
| Hive ID | Target hive in Gratheon web-app. |
| API token | Token used for `telemetry-api` and video upload requests. |
| Telemetry endpoint | Usually `https://telemetry.gratheon.com/iot/v1/metrics`. |
| Video endpoint | Usually `https://video.gratheon.com`, see [Gate Video Stream](../API/rest/gate-video-stream.md). |
| Camera device | Linux device path such as `/dev/video0`. |
| Tracking regions | Entrance line/regions used to classify bee movement direction. |
| Upload policy | Whether to upload all clips, only sampled clips, or clips around detection anomalies. |

## Runtime verification

After deploying `entrance-observer`, verify these paths:

1. Camera frames are read at the expected resolution and FPS.
2. GPU inference runs without CPU-only fallback unless intentionally configured.
3. Movement telemetry reaches [Telemetry API](../API/rest/telemetry-api.md).
4. Optional clips appear through [Gate Video Stream](../API/rest/gate-video-stream.md).
5. The web-app can show latest device status, traffic charts, and video playback links through [GraphQL](../API/GraphQL.md).

## Debugging commands

```bash
# Jetson resource monitor
jtop

# Kernel/device messages
dmesg --follow

# USB camera status
lsusb
v4l2-ctl --all -d /dev/video0

# Docker service logs
docker ps
docker logs --tail=200 -f entrance-observer

# Network/API smoke checks
curl -I https://telemetry.gratheon.com/docs/
curl -I https://video.gratheon.com/docs/
```

## Field hardening notes

- Use local buffering and retry logic because apiary internet can be intermittent.
- Mount the camera so direct sun, rain drops, and plexiglass reflections do not dominate the entrance area.
- Record exact camera focus, zoom, resolution, and tracking-region settings per hive.
- Keep remote SSH access and logs available before sealing the enclosure.
- Add watchdog/restart policy for the container so the observer recovers after power loss.
