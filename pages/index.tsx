import React, { useState, useEffect } from 'react'; // Correctly placed imports
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';


//const bgVideo = document.querySelector("#bgVideo");
const randomIndex = 1 + Math.floor(Math.random() * 15);
const randomUrl =
  "https://gratheon.s3-accelerate.amazonaws.com/video/" +
  `${randomIndex}`.padStart(2, "0") +
  ".mp4";

//bgVideo.src = randomUrl;


function openSupport(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  // Add your support logic here
  console.log('Support clicked');
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // State for download URLs
  const [macArmUrl, setMacArmUrl] = useState<string | null>(null);
  const [windowsUrl, setWindowsUrl] = useState<string | null>(null);
  const [linuxUrl, setLinuxUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Define localStorage keys
  const LS_KEYS = {
    macArm: 'latestMacArmUrl',
    windows: 'latestWindowsUrl',
    linux: 'latestLinuxUrl',
  };

  useEffect(() => {
    // Try loading from localStorage first
    try {
      const cachedMacArm = localStorage.getItem(LS_KEYS.macArm);
      const cachedWindows = localStorage.getItem(LS_KEYS.windows);
      const cachedLinux = localStorage.getItem(LS_KEYS.linux);

      if (cachedMacArm) setMacArmUrl(cachedMacArm);
      if (cachedWindows) setWindowsUrl(cachedWindows);
      if (cachedLinux) setLinuxUrl(cachedLinux);
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }

    // Fetch latest release data from GitHub API
    fetch('https://api.github.com/repos/Gratheon/web-app/releases?per_page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.length > 0 && data[0].assets) {
          const latestRelease = data[0];
          let foundMacArm = false;
          let foundMacIntel = false;
          let foundWindows = false;
          let foundLinux = false;

          latestRelease.assets.forEach(asset => {
            const name = asset.name.toLowerCase();
            const url = asset.browser_download_url;

            if (name.endsWith('.dmg')) {
              if (name.includes('aarch64')) {
                setMacArmUrl(url);
                localStorage.setItem(LS_KEYS.macArm, url);
                foundMacArm = true;
              }
            } else if (name.endsWith('.msi')) {
              setWindowsUrl(url);
              localStorage.setItem(LS_KEYS.windows, url);
              foundWindows = true;
            } else if (name.endsWith('.appimage')) {
              setLinuxUrl(url);
              localStorage.setItem(LS_KEYS.linux, url);
              foundLinux = true;
            }
          });

          if (!foundMacArm && !foundMacIntel && !foundWindows && !foundLinux && latestRelease.assets.length > 0) {
               console.warn("Found release assets, but none matched expected patterns (.dmg, .msi, .AppImage with arch)");
          } else if (latestRelease.assets.length === 0) {
               console.warn("Latest release has no assets.");
          }

        } else {
          throw new Error('No releases or assets found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch release info:", err);
        if (!localStorage.getItem(LS_KEYS.macArm) && !localStorage.getItem(LS_KEYS.windows) && !localStorage.getItem(LS_KEYS.linux)) {
            const fallbackUrl = 'https://github.com/Gratheon/web-app/releases/latest';
            console.log("API fetch failed and no cache found. Setting fallback URLs.");
            setMacArmUrl(fallbackUrl);
            setWindowsUrl(fallbackUrl);
            setLinuxUrl(fallbackUrl);
        } else {
            console.log("API fetch failed, but using cached links from localStorage.");
        }
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div id={styles.splash}>
        <header id={styles.front}>
          <video id={styles.bgVideo} autoPlay={true} loop muted src={randomUrl}></video>
          <div className={styles.headerContentContainer}> {/* Removed inline zIndex */}
            <div style={{ textAlign: 'center' }}>
              <div id={styles.splash_internal}>
                <div style={{ textAlign: 'center' }}>Beehive Data Analytics</div>
                <p style={{ color: 'white', textAlign: 'center', padding: '7px 0', backgroundColor: 'black', fontSize: '20px', fontWeight: 'normal' }}>
                  Save bees, time and strength
                </p>
              </div>
            </div>
            <div className={styles.installButtons}>
              <div>
                <a
                  className={[styles.signup, styles.blue].join(' ')}
                  href="https://app.gratheon.com/account/register"
                  >Try it free</a>
              </div>
              {isLoading && <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading downloads...</div>}
              {!isLoading && (macArmUrl || windowsUrl || linuxUrl) && (
                  <div className={styles.platformDownloads}> {/* Container for platform links */}
                    <a href="https://play.google.com/store/apps/details?id=com.gratheon.app.twa"><img height="50" src="./img/google.png" alt="Google Play"/></a>
                    {macArmUrl && (
                        <a href={macArmUrl} title={`Download macOS (ARM) - ${macArmUrl.split('/').pop()}`}><img className={styles.desktopDownloadIcon} src="./img/mac.png" alt="Download macOS ARM" style={{ margin: '10px' }}/></a>
                    )}
                    {windowsUrl && (
                        <a href={windowsUrl} title={`Download Windows - ${windowsUrl.split('/').pop()}`}><img className={styles.desktopDownloadIcon} src="./img/windows.png" alt="Download Windows" style={{ margin: '10px' }}/></a>
                    )}
                    {linuxUrl && (
                        <a href={linuxUrl} title={`Download Linux - ${linuxUrl.split('/').pop()}`}><img className={styles.desktopDownloadIcon} src="./img/linux.png" alt="Download Linux" style={{ margin: '10px' }}/></a>
                    )}
                  </div>
              )}
            </div>
          </div>
        </header>
      </div>

      <video
        id={styles.showcase}
        autoPlay
        loop
        muted
        src="https://gratheon.s3-accelerate.amazonaws.com/www/detection2.mov"
      ></video>

      <div style={{marginTop: '20px'}}>
        <h2 style={{ textAlign: 'center' }}>How does the app work?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Model beehives</h3>
            <p>
              It's difficult to observe and record all colony information using
              pen and paper while in the field. Model hives to remember where to
              take action and why
            </p>
            <video
              autoPlay
              loop
              muted
              src="https://gratheon.s3-accelerate.amazonaws.com/www/frame-management3.mov"
            ></video>
          </div>

          <div className={styles.feature}>
            <h3>Upload frame photos</h3>
            <p>
              Take frame photo and upload it to the app. We will detect and count
              bees to measure precise colony size and predict potential swarming
            </p>

            <img src="./img/count.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Store inspections</h3>
            <p>
              Take snapshot of the beehive state to track colony development over
              time. Compare same frame to see changes in the colony.
            </p>

            <img src="./img/inspections.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Find a queen</h3>
            <p>
              Finding a queen in a bustling metropolis to determine if the colony
              has a future can be challenging. We can surprise you and find two
            </p>

            <img src="./img/queens.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Estimate resources</h3>
            <p>
              We also detect different cells to estimate ratio of resources.
              Balancing nectar and pollen between colonies can prevent starvation
            </p>
            <img
              alt="beehive frame with detected cell types"
              src="img/comb.webp"
            />
          </div>

          <div className={styles.feature}>
            <h3>Measure mite infestation</h3>
            <p>
              Detect and count varroa mites infesting your bees without the need
              for killing bees with alcohol washing test
            </p>

            <img src="./img/varroa.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Learn from AI</h3>
            <p>
              Given all of the hive context, get a one-button advice from a large
              language model on the next steps
            </p>

            <img
              alt="beehive frame with detected cell types"
              src="img/llm.webp"
            />
          </div>

          <div className={styles.feature}>
            <h3>Take notes</h3>
            <p>
              Use ipad pencil or mouse to draw on top of the frame to highlight
              important regions
            </p>

            <video
              autoPlay
              loop
              muted
              src="https://gratheon.s3-accelerate.amazonaws.com/www/ipad3.mov"
            ></video>
          </div>

          <div className={styles.feature}>
            <h3>Share</h3>
            <p>
              Share your beehive inspection with beekeeping community by generating a link that receivers can open.
              Get help from experts to identify problems, get advice or share a joy of beekeeping.
            </p>

            <img
              alt="beehive frame with detected cell types"
              src="img/sharing.webp"
            />
          </div>

          <div className={styles.feature}>
            <h3>Spy on bees</h3>
            <p>
              Stream your beehive entrance using out entrance-observer opensource client code. 
              Alternatively use unused phone or raspberry-pi.
              Play back past videos to see what happened.

              Useful to understand behavioural patterns, detect hornet attacks, robbing, queen mating flights.
            </p>

            <iframe src="https://www.youtube.com/embed/oG791JNb1aA?autoplay=1&mute=1&loop=1" 
            style={{ width: '100%', height: '201px', margin: '0 auto', display: 'block' }}

            title="Bees at the beehive entrance" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          </div>

        </div>
      </div>

      <div id={styles.devices}>
        <h2 style={{ textAlign: 'center' }}>Hardware products</h2>
        <div>
          <div className={styles.device}>
<div className={styles.deviceText}>
  <h3>Beehive sensors <span className={styles.badge}>prototype phase</span></h3>
  <p>
                Measure temperature, humidity, CO2 level, barometric pressure,
                sound and weight to correlate colony development with
                environmental factors. Most affordable, data- and
                energy-efficient.
              </p>
              <a href="https://github.com/Gratheon/beehive-sensors/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg> Code</a>
            </div>
            <div className={styles.deviceImgs}>
              <img src="./img/sensors.webp" alt="Beehive sensors" />
              <img
                src="./img/temp.webp"
                alt="temperature graph"
                style={{ maxWidth: '300px' }}
              />
            </div>
          </div>

          <div className={styles.device}>
<div className={styles.deviceText}>
  <h3>Entrance Observer <span className={styles.badge}>MVP phase</span></h3>
  <p>
                Get video feed of entrance in real-time. Count bees coming in and
                out to estimate foraging bee daily loss. Detect varroa mites
                riding on bees. Track pollen flow. Detect robbing, worker
                orientation flights. Detect queen mating flights.
              </p>
              <a href="https://github.com/Gratheon/entrance-observer/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg> Code</a>
                <br />
                <a href="/entrance-observer-whitepaper.pdf">
<svg enable-background="new 0 0 334.371 380.563" 
version="1.1" 
width="16"
height="16"
viewBox="0 0 14 16" 
xmlns="http://www.w3.org/2000/svg">

	<g transform="matrix(.04589 0 0 .04589 -.66877 -.73379)">
		<polygon points="51.791 356.65 51.791 23.99 204.5 23.99 282.65 102.07 282.65 356.65" fill="#fff" stroke-width="212.65"/>
		<path d="m201.19 31.99 73.46 73.393v243.26h-214.86v-316.66h141.4m6.623-16h-164.02v348.66h246.85v-265.9z" stroke-width="21.791"/>
	</g>
	<g transform="matrix(.04589 0 0 .04589 -.66877 -.73379)">
		<polygon points="282.65 356.65 51.791 356.65 51.791 23.99 204.5 23.99 206.31 25.8 206.31 100.33 280.9 100.33 282.65 102.07" fill="#fff" stroke-width="212.65"/>
		<path d="m198.31 31.99v76.337h76.337v240.32h-214.86v-316.66h138.52m9.5-16h-164.02v348.66h246.85v-265.9l-6.43-6.424h-69.907v-69.842z" stroke-width="21.791"/>
	</g>
	<g transform="matrix(.04589 0 0 .04589 -.66877 -.73379)" stroke-width="21.791">
		<polygon points="258.31 87.75 219.64 87.75 219.64 48.667 258.31 86.38"/>
		<path d="m227.64 67.646 12.41 12.104h-12.41v-12.104m-5.002-27.229h-10.998v55.333h54.666v-12.742z"/>
	</g>
	<g transform="matrix(.04589 0 0 .04589 -.66877 -.73379)" fill="#ed1c24" stroke-width="212.65">
		<polygon points="311.89 284.49 22.544 284.49 22.544 167.68 37.291 152.94 37.291 171.49 297.15 171.49 297.15 152.94 311.89 167.68"/>
		<path d="m303.65 168.63 1.747 1.747v107.62h-276.35v-107.62l1.747-1.747v9.362h272.85v-9.362m-12.999-31.385v27.747h-246.86v-27.747l-27.747 27.747v126h302.35v-126z"/>
	</g>
	<rect x="1.7219" y="7.9544" width="10.684" height="4.0307" fill="none"/>
	<g transform="matrix(.04589 0 0 .04589 1.7219 11.733)" fill="#fff" stroke-width="21.791"><path d="m9.216 0v-83.2h30.464q6.784 0 12.928 1.408 6.144 1.28 10.752 4.608 4.608 3.2 7.296 8.576 2.816 5.248 2.816 13.056 0 7.68-2.816 13.184-2.688 5.504-7.296 9.088-4.608 3.456-10.624 5.248-6.016 1.664-12.544 1.664h-8.96v26.368zm22.016-43.776h7.936q6.528 0 9.6-3.072 3.2-3.072 3.2-8.704t-3.456-7.936-9.856-2.304h-7.424z"/><path d="m87.04 0v-83.2h24.576q9.472 0 17.28 2.304 7.936 2.304 13.568 7.296t8.704 12.8q3.2 7.808 3.2 18.816t-3.072 18.944-8.704 13.056q-5.504 5.12-13.184 7.552-7.552 2.432-16.512 2.432zm22.016-17.664h1.28q4.48 0 8.448-1.024 3.968-1.152 6.784-3.84 2.944-2.688 4.608-7.424t1.664-12.032-1.664-11.904-4.608-7.168q-2.816-2.56-6.784-3.456-3.968-1.024-8.448-1.024h-1.28z"/><path d="m169.22 0v-83.2h54.272v18.432h-32.256v15.872h27.648v18.432h-27.648v30.464z"/></g>

</svg> White Paper</a>
            </div>

            <div className={styles.deviceImgs}>
              <img src="./img/observer.webp" alt="Entrance Observer" />
              <video autoPlay loop muted src="./img/counting.mov"></video>
            </div>
          </div>

          <div className={styles.device}>
<div className={styles.deviceText}>
  <h3>Modular Robotic beehive <span className={styles.badge}>ideation phase</span></h3>
  <p>
                Our ultimate goal. Automate inspections with a mechanical frame
                extraction. Save energy from lifting heavy beehive sections.
                Reduce bees dying from inspections. Improve efficiency with remote
                internal observation to save time on field trips. Be always
                up-to-date with alert notifications. Keep neighbours sting-free in
                urban areas.
              </p>
              <a href="https://github.com/Gratheon/robotic-beehive/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg> Code</a>
            </div>
            <div className={styles.deviceImgs}>
              <video
                autoPlay
                loop
                muted
                src="https://gratheon.s3-accelerate.amazonaws.com/video/linear-actuator.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.content}>
        <article>
          <h2>Shape the future of beekeeping</h2>
          <div id={styles.author} style={{ display: 'flex' }}>
            <div style={{ paddingRight: '10px' }}>
              <a href="https://twitter.com/tot_ra" style={{ border: 'none' }}>
                <img
                  alt="author photo"
                  style={{ borderRadius: '25px' }}
                  width="50"
                  height="50"
                  src="./img/artjom.jpg"
                />
              </a>
            </div>

            <div>
              By <a href="https://www.linkedin.com/in/kurapov/">Artjom Kurapov</a>,<br />Beekeeper, Founding engineer
            </div>
          </div>
          <p>
            I am a software engineer and 5 years ago I became a beekeeper to
            improve pollination of my garden and get higher yields. To me, bees
            are also a cute and interesting pet.
          </p>
          <p>
            Bees are key species for our food security. Farmers are cooperating
            with beekeepers to increase yields through precise pollination.
          </p>
          <p>
            Traditional beekeeping requires observability of a bee colony, because
            bees can experience starvation, queen loss, late swarming, or get{' '}
            <i>Varroa destructor</i> mite infestation which weakens the colony and
            causes overwintering collapse.
          </p>
          <p>
            Observability is typically solved with a hard physical labor and
            frequent and time-limited inspections. Dressed in a protective suit,
            in the summer heat, you need to lift 20 kg beehive sections, which were
            designed 150 years ago and notice small details while you are getting
            stung by defending bees, causing inspection stress and killing bees.
          </p>
          <p>
            As your apiary grows, this work becomes unscalable. Industrial
            beekeepers have multiple apiaries at distant locations that are hard
            to reach. Existing solutions do not adequately solve these issues
          </p>
          <p>
            💡 Our goal is to help beekeepers with observability and automation.
            Our vision is a fully autonomous multi-hive Robotic Apiary that can
            remotely inspect colonies. We will reach this step by step, starting
            with a software.
          </p>
          <p>
            By providing actionable metrics and automation, beekeepers become more
            efficient, spend less time in the field and analyze more, doing
            precise intervention only when needed.
          </p>
          <div id={styles.future}>
            <div>
              <p>
                Gratheon app is built on the shoulders of open-source software and
                is fully{' '}
                <a href="https://github.com/gratheon">open source</a> too.
              </p>
              <p>
                Join us to improve life of 100 million bee colonies worldwide and
                meet pollination demand for more. We're looking for{' '}
                <strong>investors</strong> to scale our development,{' '}
                <a
                  href="https://www.notion.so/gratheon/Open-roles-positions-e50bd8e561c74102ab8e2b96276809c7?pvs=4"
                  >engineers</a>{' '}
                to join{' '}
                <a
                  href="https://www.notion.so/gratheon/Team-5ff38d33b8a2448ca02ffc26aed09278?pvs=4"
                  >our team</a>,{' '}
                <a
                  href="https://www.notion.so/gratheon/Advisors-6b51c9883cd94fe8a70a4ae548d1970a?pvs=4"
                  >beekeepers</a>{' '}
                to run field testing and advisors to guide us.
              </p>
              <p>Got some ideas?</p>

              <a className={[styles.action, styles.action_green].join(' ')} href="https://discord.gg/PcbP4uedWj">Tell us in Discord</a> <a
                style={{ maxWidth: '109px' }}
                className={[styles.action, styles.blue].join(' ')}
                href="https://app.gratheon.com/account/register"
                >Sign up</a
              >
            </div>
          </div>
        </article>
      </div>

      <iframe
        title="Author's introduction"
        style={{ width: '100%', height: '500px', margin: '0 auto', display: 'block' }}
        src="https://www.youtube.com/embed/gM3AJEAhmXc?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#ffd900', height: '6px', flexGrow: 1 }}></div>
        <div style={{ backgroundColor: '#2f8b0b', height: '6px', flexGrow: 1 }}></div>
        <div style={{ backgroundColor: '#0248ff', height: '6px', flexGrow: 1 }}></div>
      </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Beehive AI monitoring | ${siteConfig.title}`}
      description="Monitoring software as a service for backyard beekeepers">
      <HomepageHeader />
    </Layout>
  );
}
