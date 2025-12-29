import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import '../css/pricing.css';

export default function CustomPricingPage() {
  const [calculatorValues, setCalculatorValues] = useState({
    telemetryRequests: 0,
    dataPoints: 0,
    videoMinutes: 0,
    smsAlerts: 0,
    webhooks: 0,
    hives: 0,
    frames: 0,
    frameUploads: 0,
    inspections: 0
  });

  const calculateTokens = () => {
    const tokens =
      (calculatorValues.telemetryRequests * 0.002) +
      (calculatorValues.dataPoints * 0.0002) +
      (calculatorValues.videoMinutes * 0.27) +
      (calculatorValues.smsAlerts * 0.3) +
      (calculatorValues.webhooks * 0.01) +
      (calculatorValues.hives * 2) +
      (calculatorValues.frames * 0.02) +
      (calculatorValues.frameUploads * 0.25) +
      calculatorValues.inspections;
    return Math.round(tokens * 100) / 100;
  };

  const calculateCost = () => {
    const tokens = calculateTokens();
    return Math.round((tokens / 1000) * 100 * 100) / 100;
  };

  const handleInputChange = (field, value) => {
    setCalculatorValues(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  return (
    <div className="pricing-page-wrapper">
      <div className="pricing-page-header">
        <h1 className="pricing-page-title">⚖️ Pricing Plans</h1>
        <p className="pricing-page-subtitle">
          Choose the plan that best fits your beekeeping needs. Our subscription model is designed to support beekeepers of all sizes.
        </p>
      </div>

      <div className="pricing-container">
        {/* Hobbyist Plan */}
        <div className="pricing-card" data-tier="hobbyist" style={{ order: 1 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Hobbyist</div>
            <div className="pricing-card-price">Free</div>
            <div className="pricing-card-description">Perfect for beginners</div>
          </div>
          <div className="pricing-card-body">
            <div className="pricing-features-section">
              <h4>Features</h4>
              <ul className="pricing-card-features">
                <li>📦 &nbsp;<Link to="/about/products/web_app/hobbyist-tier/apiary-management">Apiary & Hive Management</Link></li>
                <li>🖼️ &nbsp;<Link to="/about/products/web_app/hobbyist-tier/frame-photo-upload">Frame Photo Upload</Link></li>
                <li>🐝 &nbsp;<Link to="/about/products/web_app/hobbyist-tier/🐝 Worker bee detection">Worker Bee Detection</Link></li>
                <li>👑 &nbsp;<Link to="/about/products/web_app/hobbyist-tier/queen-detection">Queen Detection</Link></li>
                <li>♻️ &nbsp;<Link to="/about/products/web_app/hobbyist-tier/♻️ Public beehive view">Public Hive Sharing</Link></li>
                  <li>♻️ &nbsp;<Link to="/about/products/web_app/hobbyist-tier/♻️ QR-code generation">QR Code Generation</Link></li>
                  <li>📅 &nbsp;<Link to="/about/products/web_app/hobbyist-tier/📅 Varroa Treatment diary">Treatment Diary</Link></li>
                  <li>♻️ &nbsp;<Link to="/about/products/web_app/hobbyist-tier/hive_ownership_transfer">Hive ownership transfer</Link> 🛠️</li>
              </ul>
            </div>
            <div className="pricing-limitations-section">
              <h4>Limitations</h4>
              <ul className="pricing-card-features">
                <li>🐝 Up to 3 hives</li>
                <li>🐝 10 frames per hive max</li>
                <li>🐢 Low-priority AI processing</li>
                <li>⛄️ 1 year image retention</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Get Started</Link>
          </div>
        </div>

        {/* Starter Plan */}
        <div className="pricing-card simple featured" data-tier="starter" style={{ order: 2 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Starter</div>
            <div className="pricing-card-price">
              <div className="price-monthly">€22<span className="price-period"> / month</span></div>
              <div className="price-yearly-group">
                <span className="price-yearly">€220/year</span>
                <small className="price-discount">Save 17% with yearly billing</small>
              </div>
            </div>
            <div className="pricing-card-description">
              For small-scale beekeepers
            </div>
          </div>
          <div className="pricing-card-body">
            <div className="pricing-features-section">
              <h4>Features</h4>
              <ul className="pricing-card-features">
                  <li>🐝 &nbsp;<Link to="/about/products/web_app/starter-tier/🐝 Honeycomb cell detection & management">Cell Analysis</Link></li>
                  <li>🦀 &nbsp;<Link to="/about/products/web_app/starter-tier/hive_bottom_varroa_count">Hive bottom board varroa counting</Link></li>
                  <li>🗺️ &nbsp;<Link to="/about/products/web_app/starter-tier/🗺️ Hive placement planner">Hive Placement Planner</Link></li>
                  <li>🔎 &nbsp;<Link to="/about/products/web_app/starter-tier/🔎 Inspection management">Inspection Management</Link></li>
                  <li>🍭 &nbsp;<Link to="/about/products/web_app/starter-tier/🍭 Feeding history">Feeding History</Link></li>
                  <li>↔️ &nbsp;<Link to="/about/products/web_app/starter-tier/split_bee_colony">Colony Split Management</Link></li>
                  <li>🫶🏻 &nbsp;<Link to="/about/products/web_app/starter-tier/join_bee_colonies">Colony Joining Tool</Link></li>
                  <li>✏️ &nbsp;<Link to="/about/products/web_app/starter-tier/✏️ Drawing on canvas">Frame Annotation Tool</Link></li>
                  <li>🤖 &nbsp;<Link to="/about/products/web_app/starter-tier/🤖 Beekeeping advice with LLM">AI Beekeeping Assistant</Link></li>
              </ul>
            </div>
            <div className="pricing-limitations-section">
              <h4>Limitations</h4>
              <ul className="pricing-card-features">
                <li>🧑‍🚀 1 user account</li>
                <li>🐝 Up to 20 hives</li>
                <li>🐝 30 frames per hive</li>
                <li>⛄️ 2 year image retention</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Start Free Trial</Link>
          </div>
        </div>

        {/* Flexible Plan */}
        <div className="pricing-card flexible featured" data-tier="flexible" style={{ order: 3 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Flexible</div>
            <div className="pricing-card-price">€100<span style={{ fontSize: "1rem" }}> one-time</span></div>
            <div className="pricing-card-description">Pay only for what you use</div>
            <div style={{
              background: '#f39c12',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginTop: '8px',
              display: 'inline-block'
            }}>
                🛠In Development
            </div>
          </div>
          <div className="pricing-card-body">
            <div className="pricing-features-section">
              <h4>Pay-per-use Infrastructure Features</h4>
              <ul className="pricing-card-features">
                <li>🎥 Hive entrance video processing & storage</li>
                <li>📺 &nbsp;<Link to="/about/products/web_app/flexible-tier/video_playback">Video playback</Link></li>
                <li>🚿 &nbsp; Increased IoT telemetry rate limits</li>

                <li>🛠 SMS alert notifications</li>
                <li>🛠 Webhook calls & API integrations</li>

                <li>📦 Extra hive & frame capacity beyond tier limits</li>
                <li>🖼️ Additional frame uploads</li>
                <li>📓 Extra beehive inspections</li>
              </ul>
            </div>
            <div className="pricing-features-section">
              <h4>Perfect For</h4>
              <ul className="pricing-card-features">
                <li>📊 Variable workload beekeepers</li>
                <li>🔬 Research & experimentation</li>
                <li>⚡ Scaling beyond fixed tier limits</li>
                <li>💰 Cost control with exact usage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-card featured professional" data-tier="professional" style={{ order: 4 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Professional</div>
            <div className="pricing-card-price">
              <div className="price-monthly">€55<span className="price-period"> / month</span></div>
              <div className="price-yearly-group">
                <span className="price-yearly">€599/year</span>
                <small className="price-discount">Save 9% with yearly billing</small>
              </div>
            </div>
            <div className="pricing-card-description">
              For commercial beekeepers
            </div>
            <div style={{
              background: '#f39c12',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginTop: '8px',
              display: 'inline-block'
            }}>
                🛠In Development
            </div>
          </div>
          <div className="pricing-card-body">
            <div className="pricing-features-section">
              <h4>Features</h4>
              <ul className="pricing-card-features">
                <li>📈 &nbsp;<Link to="/about/products/web_app/pro-tier/hive_telemetry_storage">Hive telemetry storage</Link></li>
                <li>📊 &nbsp;<Link to="/about/products/web_app/pro-tier/timeseries_data_analytics">Timeseries data analytics</Link>️</li>
                  <li>🛠 &nbsp;<Link to="/about/products/web_app/pro-tier/colony_comparison_analytics">Colony comparison analytics</Link></li>
                  <li>🛠 &nbsp;<Link to="/about/products/web_app/pro-tier/inventory_management">Warehouse inventory management</Link>️</li>
                  <li>🛠 &nbsp; AI-driven anomaly detection</li>
                  <li>🛠 &nbsp; Device management️</li>
                  <li>📓 Unlimited inspections per hive</li>
              </ul>
            </div>
            <div className="pricing-limitations-section">
              <h4>Limitations</h4>
              <ul className="pricing-card-features">
                <li>📈 Min 10 min telemetry resolution</li>
                <li>🧑‍🚀 Up to 20 user accounts</li>
                <li>🐝 Up to 150 hives</li>
                <li>⛄️ 3 year image retention</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card-footer">
            <Link to="mailto:sales@gratheon.com" className="pricing-button">Contact Sales</Link>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card enterprise featured" data-tier="enterprise" style={{ order: 5 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Enterprise</div>
            <div className="pricing-card-price enterprise-price">
              <span className="enterprise-custom-text">Custom</span>
              <span className="enterprise-pricing-text">Pricing</span>
            </div>
            <div className="pricing-card-description">
              For large commercial operations with thousands of hives
            </div>
            <div style={{
              background: '#666',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginTop: '8px',
              display: 'inline-block'
            }}>
              Contract Required
            </div>
          </div>
          <div className="pricing-card-body">
            <div className="pricing-features-section">
              <h4>Features</h4>
              <ul className="pricing-card-features">
                <li>🛠️ Custom integrations & API development</li>
                <li>🏢 On-premise deployment options</li>
                <li>📞 24/7 priority support & maintenance</li>
                <li>⚡  High-priority processing & SLA guarantees</li>
                <li>🔐 Advanced security & compliance features</li>
                <li>📊 Custom reporting & analytics dashboards</li>
                <li>📋 Custom training & onboarding</li>
              </ul>
            </div>
            <div className="pricing-limitations-section">
              <h4>Scale</h4>
              <ul className="pricing-card-features">
                <li>🐝 1000+ hives supported</li>
                <li>👥 Unlimited user accounts</li>
                <li>⛄️ Unlimited data retention</li>
                <li>📈 Real-time telemetry (1-sec resolution)</li>
                <li>🚀 Priority processing queue</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card-footer">
            <Link to="mailto:enterprise@gratheon.com" className="pricing-button">Contact Enterprise Sales</Link>
          </div>
        </div>
      </div>


      {/* Addon Section - Fluid connection with Flexible tier */}
      <div className="addon-section-wrapper" id="addon-calculator">
        <div className="addon-section" style={{
          marginTop: '2rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(2, 72, 255, 0.05), rgba(2, 72, 255, 0.02))',
          borderRadius: '16px',
          border: '2px solid #0248ff'
        }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            color: '#0248ff',
            background: 'linear-gradient(135deg, #0248ff, #0040e8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '2.5rem'
          }}>
            Flexible Addon Features - Usage Calculator
          </h2>
          <div style={{
            fontSize: '1.5rem',
            color: '#0248ff',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            €100 for 1000 tokens*
          </div>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Calculate exact costs for infrastructure features that scale with usage
          </p>
          <div style={{
            background: '#f39c12',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '0.9rem',
            display: 'inline-block',
            marginTop: '8px'
          }}>
              🛠 In Development
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}>
          {/* Left side - Plan info and CTA */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '400px'
          }}>
            <h3 style={{ color: '#0248ff', marginBottom: '1rem' }}>How Flexible Addons Work</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '1rem',
              lineHeight: '1.8'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>💰 Buy €100 starter pack (1000 tokens)</li>
              <li style={{ marginBottom: '0.5rem' }}>🔋 Tokens valid for 1 year, never expire</li>
              <li style={{ marginBottom: '0.5rem' }}>⚡ Use tokens for infrastructure features</li>
              <li style={{ marginBottom: '0.5rem' }}>📈 Scale beyond any tier limits</li>
              <li style={{ marginBottom: '0.5rem' }}>🧮 Pay only for exact usage</li>
              <li style={{ marginBottom: '0.5rem' }}>💳 No monthly recurring charges</li>
            </ul>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(2, 72, 255, 0.1), rgba(2, 72, 255, 0.05))',
              border: '1px solid #0248ff',
              borderRadius: '12px'
            }}>
              <div style={{
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                color: '#0248ff',
                fontWeight: 'bold'
              }}>
                Total tokens needed: {calculateTokens()}
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#0248ff',
                fontWeight: 'bold'
              }}>
                Estimated monthly cost: €{calculateCost()}
              </div>
              <Link
                to="mailto:sales@gratheon.com"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.8rem 1.5rem',
                  background: '#0248ff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Right side - Calculator Table */}
          <div style={{
            flex: '2',
            minWidth: '500px'
          }}>
            <h3 style={{ color: '#0248ff', marginBottom: '1rem' }}>Infrastructure Features & Pricing</h3>
            <table className="token-calculator-table" style={{
              width: '100%',
              border: '2px solid #0248ff',
              borderRadius: '8px',
              overflow: 'hidden',
              fontSize: '0.9rem'
            }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, #0248ff, #0040e8)',
                  color: 'white'
                }}>
                  <th>Infrastructure Feature</th>
                  <th>Token Cost per Unit</th>
                  <th>Your Monthly Usage</th>
                  <th>Tokens Required</th>
                </tr>
              </thead>
            <tbody>
              <tr>
                <td>
                  📦 Beehive management
                  <div className="service-description">Managing hive records, locations, and basic data</div>
                </td>
                <td>2 tokens/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.hives}
                    onChange={(e) => handleInputChange('hives', e.target.value)}
                    min="0"
                    placeholder="hives"
                  />
                </td>
                <td className="token-result">{(calculatorValues.hives * 2).toFixed(0)}</td>
              </tr>
              <tr>
                <td>
                  📦 Frame management
                  <div className="service-description">Storing frame data, positions, and metadata</div>
                </td>
                <td>0.02 tokens/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.frames}
                    onChange={(e) => handleInputChange('frames', e.target.value)}
                    min="0"
                    placeholder="frames"
                  />
                </td>
                <td className="token-result">{(calculatorValues.frames * 0.02).toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  🖼️ Frame upload & analysis
                  <div className="service-description">AI analysis of frame images for bee detection, disease identification</div>
                </td>
                <td>0.25 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.frameUploads}
                    onChange={(e) => handleInputChange('frameUploads', e.target.value)}
                    min="0"
                    placeholder="uploads"
                  />
                </td>
                <td className="token-result">{(calculatorValues.frameUploads * 0.25).toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  📓 Beehive inspection
                  <div className="service-description">Recording and storing detailed hive inspection data</div>
                </td>
                <td>1 token/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.inspections}
                    onChange={(e) => handleInputChange('inspections', e.target.value)}
                    min="0"
                    placeholder="inspections"
                  />
                </td>
                <td className="token-result">{calculatorValues.inspections}</td>
              </tr>
              <tr>
                <td>
                  📈 Telemetry request
                  <div className="service-description">Individual sensor data requests from IoT devices</div>
                </td>
                <td>0.002 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.telemetryRequests}
                    onChange={(e) => handleInputChange('telemetryRequests', e.target.value)}
                    min="0"
                    placeholder="requests"
                  />
                </td>
                <td className="token-result">{(calculatorValues.telemetryRequests * 0.002).toFixed(3)}</td>
              </tr>
              <tr>
                <td>
                  📈 Data point storage
                  <div className="service-description">Long-term storage of sensor measurements and historical data</div>
                </td>
                <td>0.0002 tokens/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.dataPoints}
                    onChange={(e) => handleInputChange('dataPoints', e.target.value)}
                    min="0"
                    placeholder="data points"
                  />
                </td>
                <td className="token-result">{(calculatorValues.dataPoints * 0.0002).toFixed(4)}</td>
              </tr>
              <tr>
                <td>
                  📲 SMS alert
                  <div className="service-description">Text message notifications for hive alerts and warnings</div>
                </td>
                <td>0.3 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.smsAlerts}
                    onChange={(e) => handleInputChange('smsAlerts', e.target.value)}
                    min="0"
                    placeholder="alerts"
                  />
                </td>
                <td className="token-result">{(calculatorValues.smsAlerts * 0.3).toFixed(1)}</td>
              </tr>
              <tr>
                <td>
                  🎥 Video processing & storage
                  <div className="service-description">Analysis and storage of entrance observer video footage</div>
                </td>
                <td>0.27 tokens/minute/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.videoMinutes}
                    onChange={(e) => handleInputChange('videoMinutes', e.target.value)}
                    min="0"
                    placeholder="minutes"
                  />
                </td>
                <td className="token-result">{(calculatorValues.videoMinutes * 0.27).toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  🪝 Webhook call
                  <div className="service-description">API integrations and automated data transfers</div>
                </td>
                <td>0.01 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.webhooks}
                    onChange={(e) => handleInputChange('webhooks', e.target.value)}
                    min="0"
                    placeholder="calls"
                  />
                </td>
                <td className="token-result">{(calculatorValues.webhooks * 0.01).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <p style={{
            fontSize: '0.85rem',
            color: '#666',
            marginTop: '1rem',
            fontStyle: 'italic'
          }}>
            * Tokens are valid for 1 year. Unused tokens do not roll over.
          </p>
        </div>
      </div>
    </div> {/* End addon-section */}
    </div> {/* End addon-section-wrapper */}

      <h2>Hardware Devices</h2>

      <p>If you buy a device, you are not vendor-locked and we do not force you to pay for web-app subscription, but it's much less hassle for you and this would support us in the long term as a company. If you choose to setup fully local integration and manage data storage yourself, you can use our docs.</p>


      <div className="hardware-devices-container">
        <div className="hardware-device-card">
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/sensors/">Sensors</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.26.53-41f0bf6a4c13c5d1ae1cb945c8cc1a06.png" alt="Sensors" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€5 / month</span>
                <span className="price-description">Timeseries data management & analytics</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">€200</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://gratheon.com/docs/beehive-sensors/" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="hardware-device-card">
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/entrance_observer/">Entrance observer</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.00-9e504be04ac885dce2e1a8ff1e4ffae0.png" alt="Beehive Camera" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€20 / month</span>
                <span className="price-description">Video storage & processing</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €600</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://gratheon.com/docs/entrance-observer/" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="hardware-device-card ideation" style={{opacity: 0.3}}>
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/robotic_beehive/">Robotic Beehive</Link></h3>
            <div className="hardware-device-image robotic-beehive-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-25%20at%2011.25.06-5e6bdf8cbd74362a2be7c362199a6a00.png" alt="Robotic Beehive" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€50 / month</span>
                <span className="price-description">Automation & data storage services</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €3000</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://discord.gg/PcbP4uedWj" className="pricing-button">Join Discord</Link>
          </div>
        </div>

        <div className="hardware-device-card ideation" style={{opacity: 0.3}}>
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/robotic_apiary/">Robotic Apiary</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.24-365e7c710a846d74c4d87c28849a1f8f.png" alt="Robotic Apiary" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">Device Subscription</span>
                <span className="price-value">€200 / month</span>
                <span className="price-description">Multi-hive management & analytics services</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €8000</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://discord.gg/PcbP4uedWj" className="pricing-button">Join Discord</Link>
          </div>
        </div>
      </div> {/* End hardware-devices-container */}

      <div className="device-pricing-info">
        <p><strong>Note:</strong> Each hardware device operates off-grid. For integration with web-app, a subscription fee must be used that covers data management services specific to that device</p>
        <p>* Tokens are valid for 1 year. Unused tokens do not roll over.</p>
      </div>
    </div>
  );
}
