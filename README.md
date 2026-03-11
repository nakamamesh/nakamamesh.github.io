<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NakamaMesh Whitepaper - Decentralized Mesh Communication</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.8;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .whitepaper-container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        h1 {
            color: #667eea;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }
        h2 {
            color: #764ba2;
            margin-top: 40px;
            margin-bottom: 20px;
        }
        h3 {
            color: #667eea;
            margin-top: 30px;
        }
        .contract-info {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 30px 0;
            border-radius: 8px;
        }
        .contract-address {
            font-family: 'Courier New', monospace;
            background: #e9ecef;
            padding: 15px;
            border-radius: 6px;
            word-break: break-all;
            font-size: 14px;
            margin-top: 10px;
        }
        .tokenomics-table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .tokenomics-table th {
            background: #667eea;
            color: white;
            padding: 15px;
            text-align: left;
        }
        .tokenomics-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e9ecef;
        }
        .tokenomics-table tr:hover {
            background: #f8f9fa;
        }
        .highlight-box {
            background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: white;
            background: #667eea;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            transition: all 0.3s;
        }
        .back-link:hover {
            background: #764ba2;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="whitepaper-container">
        <a href="index.html" class="back-link">← Back to Home</a>
        
        <h1>NakamaMesh Network Whitepaper</h1>
        <p><strong>Version 2.0 | March 2026</strong></p>
        
        <h2>Executive Summary</h2>
        <p>NakamaMesh Network is a revolutionary decentralized mesh communication platform designed to enable unstoppable peer-to-peer messaging even in disaster scenarios where traditional internet and cellular infrastructure fails. Built on Bluetooth Low Energy (BLE) mesh technology with Solana blockchain integration, NakamaMesh empowers communities to maintain critical communication channels during natural disasters, network outages, protests, or censorship attempts.</p>

        <div class="contract-info">
            <h3>🔗 Solana Smart Contract</h3>
            <p><strong>Blockchain:</strong> Solana</p>
            <p><strong>Token Symbol:</strong> $NAKI</p>
            <p><strong>Contract Address:</strong></p>
            <div class="contract-address">
                BBTiMC1opZqgXTfhbYv7omxLZUhp8iU6n6JMTYzzYBd
            </div>
            <p style="margin-top: 15px;"><strong>Explorer Links:</strong></p>
            <ul>
                <li><a href="https://solscan.io/token/BBTiMC1opZqgXTfhbYv7omxLZUhp8iU6n6JMTYzzYBd" target="_blank">View on Solscan</a></li>
                <li><a href="https://solana.fm/address/BBTiMC1opZqgXTfhbYv7omxLZUhp8iU6n6JMTYzzYBd" target="_blank">View on Solana.fm</a></li>
            </ul>
        </div>

        <h2>Problem Statement</h2>
        <p>In 2013, during Super Typhoon Yolanda (Haiyan) in the Philippines, millions of people were left without communication infrastructure for weeks. This catastrophic event inspired the creation of NakamaMesh Network – a communication system that cannot be shut down by natural disasters, government censorship, or infrastructure failures.</p>
        
        <div class="highlight-box">
            <p><strong>Key Problems We Solve:</strong></p>
            <ul>
                <li>Communication blackouts during natural disasters</li>
                <li>Dependence on centralized telecom infrastructure</li>
                <li>Government censorship and internet shutdowns</li>
                <li>High costs of emergency communication systems</li>
                <li>Lack of privacy in traditional messaging platforms</li>
            </ul>
        </div>

        <h2>Technology Overview</h2>
        
        <h3>Bluetooth Mesh Networking</h3>
        <p>NakamaMesh leverages Bluetooth Low Energy (BLE) mesh technology to create device-to-device communication networks. Each smartphone running the NakamaMesh app becomes a node in the mesh, capable of:</p>
        <ul>
            <li>Direct peer-to-peer messaging within 30-100 meters</li>
            <li>Multi-hop message relay through intermediate devices</li>
            <li>Automatic route optimization and healing</li>
            <li>Low power consumption for extended battery life</li>
        </ul>

        <h3>Solana Blockchain Integration</h3>
        <p>The $NAKI token on Solana blockchain powers the network's incentive layer, enabling:</p>
        <ul>
            <li><strong>Priority Messaging:</strong> Users can spend NAKI tokens to prioritize critical messages</li>
            <li><strong>Relay Rewards:</strong> Device owners earn NAKI for relaying messages across the mesh</li>
            <li><strong>Network Governance:</strong> Token holders participate in protocol decisions</li>
            <li><strong>Decentralized Storage:</strong> Future integration with Solana-based storage solutions</li>
        </ul>

        <h2>Token Economics ($NAKI)</h2>
        
        <div class="contract-info">
            <h3>Total Supply: 100,000,000,000 NAKI</h3>
            <p>100 Billion Tokens on Solana Blockchain</p>
        </div>

        <h3>Token Distribution</h3>
        <table class="tokenomics-table">
            <thead>
                <tr>
                    <th>Allocation</th>
                    <th>Percentage</th>
                    <th>Tokens</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Software Development</strong></td>
                    <td>25%</td>
                    <td>25,000,000,000</td>
                    <td>Core platform development, app updates, security audits</td>
                </tr>
                <tr>
                    <td><strong>Marketing</strong></td>
                    <td>15%</td>
                    <td>15,000,000,000</td>
                    <td>User acquisition, brand awareness, partnerships</td>
                </tr>
                <tr>
                    <td><strong>Founders</strong></td>
                    <td>10%</td>
                    <td>10,000,000,000</td>
                    <td>Founding team allocation (1-year lock-up)</td>
                </tr>
                <tr>
                    <td><strong>Liquidity Pool</strong></td>
                    <td>10%</td>
                    <td>10,000,000,000</td>
                    <td>DEX liquidity provisioning (Jupiter, Raydium)</td>
                </tr>
                <tr>
                    <td><strong>Community Development</strong></td>
                    <td>10%</td>
                    <td>10,000,000,000</td>
                    <td>Community grants, ambassador programs, events</td>
                </tr>
                <tr>
                    <td><strong>Airdrop</strong></td>
                    <td>5%</td>
                    <td>5,000,000,000</td>
                    <td>Early adopter rewards, promotional campaigns</td>
                </tr>
                <tr>
                    <td><strong>Pre-Sale</strong></td>
                    <td>5%</td>
                    <td>5,000,000,000</td>
                    <td>Initial fundraising for development runway</td>
                </tr>
                <tr>
                    <td><strong>Exchanges</strong></td>
                    <td>5%</td>
                    <td>5,000,000,000</td>
                    <td>CEX listings (Binance, KuCoin, etc.)</td>
                </tr>
                <tr>
                    <td><strong>Liquidity Pool Rewards</strong></td>
                    <td>5%</td>
                    <td>5,000,000,000</td>
                    <td>LP staking incentives and yield farming</td>
                </tr>
                <tr>
                    <td><strong>Operations</strong></td>
                    <td>5%</td>
                    <td>5,000,000,000</td>
                    <td>Day-to-day operations, legal, compliance</td>
                </tr>
                <tr>
                    <td><strong>Treasury</strong></td>
                    <td>5%</td>
                    <td>5,000,000,000</td>
                    <td>Strategic reserves for future opportunities</td>
                </tr>
            </tbody>
        </table>

        <h3>Token Utility</h3>
        <div class="highlight-box">
            <p><strong>Message Priority Tiers:</strong></p>
            <ul>
                <li><strong>Free Tier:</strong> Standard message delivery (no cost)</li>
                <li><strong>Priority (5 NAKI):</strong> Higher priority in message queue</li>
                <li><strong>Fast (50 NAKI):</strong> Expedited routing through mesh network</li>
                <li><strong>Ultra Fast (200 NAKI):</strong> Maximum priority with optimized multi-hop routing</li>
            </ul>
        </div>

        <h2>Why Solana?</h2>
        <p>NakamaMesh migrated from Binance Smart Chain to Solana for several strategic reasons:</p>
        <ul>
            <li><strong>Transaction Speed:</strong> 65,000+ TPS enables real-time micro-transactions</li>
            <li><strong>Low Fees:</strong> Sub-cent transaction costs make micropayments viable</li>
            <li><strong>Mobile Integration:</strong> Solana Mobile Stack (Saga phone) perfect for mesh networking</li>
            <li><strong>DePIN Ecosystem:</strong> Growing Solana DePIN community (Helium, Hivemapper, Render)</li>
            <li><strong>Ecosystem Support:</strong> Strong developer tools and wallet infrastructure</li>
        </ul>

        <h2>Roadmap</h2>
        
        <h3>Phase 1: Foundation (Q1-Q2 2026)</h3>
        <ul>
            <li>✅ iOS and Android apps launched</li>
            <li>✅ Solana smart contract deployment</li>
            <li>🔄 Token pre-sale and ICO launch</li>
            <li>🔄 DEX listings (Jupiter, Raydium)</li>
            <li>📋 Community building (10,000+ users)</li>
        </ul>

        <h3>Phase 2: Token Integration (Q3 2026)</h3>
        <ul>
            <li>📋 In-app NAKI token payments</li>
            <li>📋 Priority messaging tiers activation</li>
            <li>📋 Relay reward system beta</li>
            <li>📋 CEX listing applications</li>
        </ul>

        <h3>Phase 3: Network Expansion (Q4 2026)</h3>
        <ul>
            <li>📋 Partnership with disaster relief organizations</li>
            <li>📋 Government pilot programs</li>
            <li>📋 LoRa long-range radio integration</li>
            <li>📋 Satellite mesh gateway prototypes</li>
        </ul>

        <h3>Phase 4: Ecosystem Growth (2027)</h3>
        <ul>
            <li>📋 Developer SDK release</li>
            <li>📋 Third-party app integrations</li>
            <li>📋 Hardware mesh nodes</li>
            <li>📋 Global expansion to 50+ countries</li>
        </ul>

        <h2>Team</h2>
        <p>NakamaMesh Network was founded by Jay, a blockchain entrepreneur and disaster communication advocate based in Playa del Carmen, Mexico. The project was inspired by his family's experience during Super Typhoon Yolanda in the Philippines, where millions were left without communication for weeks.</p>

        <h2>Use Cases</h2>
        <div class="highlight-box">
            <ul>
                <li><strong>Natural Disasters:</strong> Hurricanes, earthquakes, tsunamis, floods</li>
                <li><strong>Protest Coordination:</strong> Censorship-resistant communication</li>
                <li><strong>Remote Areas:</strong> Communication without cellular infrastructure</li>
                <li><strong>Emergency Response:</strong> First responder coordination</li>
                <li><strong>Maritime Communication:</strong> Ship-to-ship messaging at sea</li>
                <li><strong>Rural Communities:</strong> Village-to-village communication networks</li>
            </ul>
        </div>

        <h2>Security & Privacy</h2>
        <p>NakamaMesh prioritizes user privacy and message security:</p>
        <ul>
            <li><strong>End-to-End Encryption:</strong> All messages encrypted using Signal Protocol</li>
            <li><strong>Anonymous Relay:</strong> Intermediate nodes cannot read message contents</li>
            <li><strong>No Central Servers:</strong> Fully peer-to-peer architecture</li>
            <li><strong>Open Source:</strong> Code available for security audits</li>
        </ul>

        <h2>Get Involved</h2>
        <p>Join the NakamaMesh revolution:</p>
        <ul>
            <li><strong>Download the App:</strong> Available on iOS App Store and Google Play</li>
            <li><strong>Join the Community:</strong> Telegram, Discord, Twitter/X</li>
            <li><strong>Participate in Pre-Sale:</strong> Early access to NAKI tokens</li>
            <li><strong>Become an Ambassador:</strong> Earn rewards for spreading awareness</li>
        </ul>

        <div class="contract-info">
            <h3>Important Links</h3>
            <ul>
                <li><strong>Website:</strong> <a href="https://nakamamesh.network" target="_blank">nakamamesh.network</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/nakamamesh" target="_blank">github.com/nakamamesh</a></li>
                <li><strong>Solana Contract:</strong> BBTiMC1opZqgXTfhbYv7omxLZUhp8iU6n6JMTYzzYBd</li>
            </ul>
        </div>

        <p style="text-align: center; margin-top: 50px; color: #667eea; font-style: italic;">
            "Unstoppable Communication for Everyone"
        </p>
    </div>
</body>
</html>
