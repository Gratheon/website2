---
sidebar_position: 2
title: Kaugtöölaua ühenduse seadistamine 🖥️
---
### VNC-ga kaugtöölaud

```bash
sudo apt-get install vino
```

Kui proovite oma töölauda Jetson Nano kaudu jagada, siis protsess nurjub; _töölaua jagamise_ käivitamine nurjub ja ilmneb tõrge. See retsept näitab, kuidas probleemi lahendada ja VNCVieweri kaudu kaugühendusega luua. Seda öeldes eelistame siiski RDP (XRDP) kaudu ühendamist, mis on meie arvates kiirem ja mugavam.

Probleemi lahendamiseks järgige alltoodud samme.

- Kõigepealt muudame skeemi `org.gnome.Vino`, kuna sellel puudub parameeter `enabled`. Avage skeem:

```bash
sudo nano /usr/share/glib-2.0/schemas/org.gnome.Vino.gschema.xml

```

Lisage puuduv võti (selleks sobib iga asukoht):

```xml
<key name='enabled' type='b'>
   <summary>Enable remote access to the desktop</summary>
   <description>
   If true, allows remote access to the desktop via the RFB
   protocol. Users on remote machines may then connect to the
   desktop using a VNC viewer.
   </description>
   <default>false</default>
</key>

```

- Kompileerige uus Gnome'i skeemi konfiguratsioon:

```bash
sudo glib-compile-schemas /usr/share/glib-2.0/schemas

```

- Värskendage _Töölaua jagamise_ seadeid. Teie rakendus peaks nüüd töötama. Käivitage see oma Jetson Nano töölaualt.
    - Luba **Luba teistel kasutajatel teie töölauda vaadata**
    - Lubage alamjaotis **Luba teistel kasutajatel oma töölauda juhtida**
    - Lülitage funktsioon välja **Peate kinnitama iga juurdepääsu sellele masinale**
    - Seadistage parool jaotises **Nõuge kasutajalt selle parooli sisestamist**
    - Sulgege _Töölaua jagamise_ seaded. Siin olete valmis
- Seadistage VNC-server automaatseks käivitamiseks
    - Avage paneel _Startup Application Preferences_
    - Lisage oma VNC (Vino) kirje: lisage nimi ("Vino"), kirjeldus (mis tahes tekst, mis teile sobib) ja käsk: `/usr/lib/vino/vino-server`. Sulgege rakendus
- Keelake VNC-serveri krüpteerimine: kahjuks peame selle kirjutamise ajal ilma selleta elama. Sisestage terminali järgmine tekst:

```bash
gsettings set org.gnome.Vino require-encryption false
gsettings set org.gnome.Vino prompt-enabled false

```

- taaskäivitage
- pärast taaskäivitamist saate jagatud ekraaniga ühenduse loomiseks kasutada sülearvuti mis tahes **VNCViewerit**. Ütlematagi selge, et kiirus on see, mis ta on ja kui saad, kasuta eelmist, XRDP retsepti.

**Märkus**: kuna me rikume VNC kaudu kaugühenduste turvaseadeid, peame olema teadlikud ja lubama VNC funktsiooni (kogu see jaotis) ainult vajaduse korral.

- Käivitage võrgu konfigureerimine, et saada Jetson-masina IP, vaadake kas wlan0 või eth0 all, olenevalt sellest, kas see kasutab wifit või Etherneti

```
ifconfig
export DISPLAY=:1 && /usr/lib/vino/vino-server
```

## Autostarti lisamine

```bash
sudo nano /etc/systemd/system/vnc.service
[Unit]
Description=Start vino
After = network.target

[Service]
ExecStart=/usr/lib/vino/vino-server
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
nano ~/.config/autostart/systemctl.desktop

[Desktop Entry]
Type=Application
Exec=systemctl --user start vnc-server
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
Name[en_US]=vino Server
Name=vino Server
Comment[en_US]=Auto-start the VNC service on boot and login back in
Comment=Auto-start the VNC service on boot
```

## Määrake vaikeeraldusvõimeks mitte 640x480

`sudo nano /etc/X11/xorg.conf`

Lisa:

```
Section "Screen"
	Identifier "Default Screen"
	Monitor "Configured Monitor"
	Device "Tegra0"
	SubSection "Display"
	Depth 24
	Virtual 1280 800 # Modify the resolution by editing these values
	EndSubSection
EndSection
```

taaskäivitage

### Hostimasinas

- laadige alla ja käivitage RealVNC [https://www.realvnc.com/en/connect/download/viewer/macos/](__ETDOCS_URL_00012__)
    - Teise võimalusena võite kasutada TigetVNC [https://tigervnc.org/](__ETDOCS_URL_00013__)
- Ühendage eelmisest ülaltoodud sammust vnc://ip-of-jetson
- Parema reageerimisvõime saavutamiseks seadistage pildikvaliteet madalaimatele sätetele

## (Valikuline) Kaugtöölaud koos xrdp-ga

See on kasulik Windowsi kasutavate hostiseadmete jaoks

<iframe width="100%" height="400" src="https://www.youtube.com/embed/7-WMvmWVxJQ" title="L-2 Jetson Nano Headless | Use Jetson Nano Remotely" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Ühenduse loomine brauserist

- tasuge [https://github.com/novnc/noVNC](__ETDOCS_URL_00014__) kohapeal
-jookse 
```
./utils/novnc_proxy --vnc 192.168.1.223:5900 --listen [localhost:6081](<http://localhost:6081>)
``` 
kus `192.168.1.223` on jetsoni IP
    
- avage brauseri link, mida see soovitab

![](docs/img/Screenshot%202024-06-20%20at%2019.13.32.png)