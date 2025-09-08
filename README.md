<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DDS WEB 🕸️</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Rajdhani', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%);
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow-x: hidden;
            position: relative;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 68, 68, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(0, 123, 255, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
            animation: backgroundPulse 8s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }

        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.1), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(0, 255, 136, 0.2), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(255, 68, 68, 0.2), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.1), transparent),
                radial-gradient(2px 2px at 160px 30px, rgba(0, 123, 255, 0.2), transparent);
            background-repeat: repeat;
            background-size: 200px 100px;
            animation: particleFloat 20s linear infinite;
            pointer-events: none;
            z-index: -1;
        }

        @keyframes particleFloat {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-100px); }
        }

        .container {
            width: 100%;
            max-width: 600px;
            background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
            border-radius: 25px;
            padding: 40px 30px;
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.8),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                0 0 100px rgba(0, 255, 136, 0.1);
            position: relative;
            overflow: hidden;
            text-align: center;
            backdrop-filter: blur(20px);
            animation: containerFloat 6s ease-in-out infinite;
        }

        @keyframes containerFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #00ff88, #ff4444, #007bff, #00ff88);
            background-size: 200% 100%;
            animation: borderFlow 3s linear infinite;
        }

        @keyframes borderFlow {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .header {
            margin-bottom: 40px;
        }

        .title {
            font-family: 'Orbitron', monospace;
            font-size: 32px;
            font-weight: 900;
            background: linear-gradient(45deg, #00ff88, #ffffff, #ff4444);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
            animation: titleGlow 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
            0% { filter: drop-shadow(0 0 5px rgba(0, 255, 136, 0.3)); }
            100% { filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.6)); }
        }

        .subtitle {
            font-size: 18px;
            color: #888;
            font-weight: 400;
            margin-bottom: 10px;
        }

        .version-badge {
            display: inline-block;
            background: linear-gradient(135deg, #ff4444 0%, #cc3333 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        /* Initial State - Channel Follow */
        .follow-state {
            display: block;
        }

        .follow-message {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.08) 100%);
            border: 2px solid rgba(0, 255, 136, 0.4);
            border-radius: 20px;
            padding: 35px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(15px);
        }

        .follow-message::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(0, 255, 136, 0.15), transparent);
            animation: cardShimmer 4s linear infinite;
        }

        @keyframes cardShimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .follow-text {
            font-family: 'Orbitron', monospace;
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 25px;
            position: relative;
            z-index: 2;
            line-height: 1.4;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .follow-button {
            width: 100%;
            background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
            border: none;
            border-radius: 15px;
            padding: 20px 25px;
            font-family: 'Orbitron', monospace;
            font-size: 18px;
            font-weight: 700;
            color: #000000;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
            text-decoration: none;
            display: inline-block;
        }

        .follow-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 255, 136, 0.5);
            background: linear-gradient(135deg, #00ff88 0%, #00ff88 100%);
        }

        .back-button {
            background: linear-gradient(135deg, #666 0%, #444 100%);
            border: none;
            border-radius: 12px;
            padding: 15px 25px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px;
            font-weight: 600;
            color: #ffffff;
            cursor: pointer;
            margin-top: 20px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .back-button:hover {
            transform: translateY(-2px);
            background: linear-gradient(135deg, #777 0%, #555 100%);
        }

        /* Tool State - Hidden by default */
        .tool-state {
            display: none;
        }

        .section {
            margin-bottom: 35px;
        }

        .section-title {
            font-family: 'Orbitron', monospace;
            font-size: 24px;
            font-weight: 700;
            color: #ff4444;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 2px;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, transparent, #ff4444, transparent);
        }

        .script-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .script-option {
            background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
            border: 2px solid rgba(255, 68, 68, 0.3);
            border-radius: 15px;
            padding: 25px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            text-align: center;
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .script-option::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 68, 68, 0.1), transparent);
            transition: left 0.6s ease;
        }

        .script-option:hover {
            border-color: rgba(255, 68, 68, 0.8);
            box-shadow: 
                0 15px 35px rgba(255, 68, 68, 0.4),
                0 5px 15px rgba(255, 68, 68, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
            background: linear-gradient(135deg, rgba(255, 68, 68, 0.1) 0%, #2a2a2a 50%, #1a1a1a 100%);
        }

        .script-option:hover::before {
            left: 100%;
        }

        .script-option:active {
            transform: translateY(-5px) rotateX(2deg) rotateY(2deg) scale(0.98);
        }

        .script-option.downloading {
            border-color: #00ff88;
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.1) 100%);
            box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
        }

        .script-name {
            font-family: 'Orbitron', monospace;
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .script-status {
            font-size: 14px;
            color: #888;
            margin-bottom: 15px;
        }

        .download-icon {
            font-size: 28px;
            color: #ff4444;
            margin-bottom: 15px;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            display: inline-block;
            position: relative;
        }

        .download-icon::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255, 68, 68, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: all 0.3s ease;
        }

        .script-option:hover .download-icon {
            color: #00ff88;
            transform: scale(1.3) rotate(360deg);
            text-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
        }

        .script-option:hover .download-icon::after {
            transform: translate(-50%, -50%) scale(1);
            border-color: rgba(0, 255, 136, 0.5);
        }

        .script-option.downloading .download-icon {
            animation: downloadPulse 1s ease-in-out infinite;
        }

        @keyframes downloadPulse {
            0%, 100% { transform: scale(1.2); }
            50% { transform: scale(1.4); }
        }

        .other-downloads {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 35px;
        }

        .download-card {
            background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 18px;
            padding: 30px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .download-card:hover {
            border-color: rgba(0, 255, 136, 0.4);
            box-shadow: 0 10px 30px rgba(0, 255, 136, 0.15);
            transform: translateY(-5px);
        }

        .download-card-title {
            font-family: 'Orbitron', monospace;
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .download-card-button {
            width: 100%;
            background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
            border: none;
            border-radius: 12px;
            padding: 18px 25px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px;
            font-weight: 600;
            color: #ffffff;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-decoration: none;
            display: inline-block;
        }

        .download-card-button.whatsapp {
            background: linear-gradient(135deg, #25d366 0%, #1da851 100%);
        }

        .download-card-button.youtube {
            background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
        }

        .download-card-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 123, 255, 0.4);
        }

        .download-card-button.whatsapp:hover {
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
        }

        .download-card-button.youtube:hover {
            box-shadow: 0 10px 25px rgba(255, 0, 0, 0.4);
        }

        .footer {
            text-align: center;
            padding-top: 35px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-text {
            font-family: 'Orbitron', monospace;
            font-size: 18px;
            font-weight: 700;
            color: #ff4444;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
            animation: footerPulse 2s ease-in-out infinite alternate;
        }

        @keyframes footerPulse {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
        }

        .footer-link {
            display: inline-block;
            background: linear-gradient(135deg, #25d366 0%, #1da851 100%);
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-family: 'Rajdhani', sans-serif;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .footer-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5);
        }

        .icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            vertical-align: middle;
        }

        .success-message {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.25) 0%, rgba(0, 255, 136, 0.15) 100%);
            border: 2px solid rgba(0, 255, 136, 0.6);
            border-radius: 15px;
            padding: 20px;
            margin: 25px 0;
            color: #00ff88;
            font-weight: 700;
            text-align: center;
            display: none;
            animation: successSlide 0.5s ease-out;
            font-size: 16px;
        }

        .success-message.show {
            display: block;
        }

        @keyframes successSlide {
            from { opacity: 0; transform: translateY(-15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .download-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
            color: #000;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 700;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 255, 136, 0.3);
        }

        .download-notification.show {
            transform: translateX(0);
        }

        @media (max-width: 600px) {
            .container {
                margin: 10px;
                padding: 30px 20px;
                max-width: 95%;
            }
            
            .title {
                font-size: 26px;
            }
            
            .script-grid {
                grid-template-columns: 1fr;
            }
            
            .other-downloads {
                grid-template-columns: 1fr;
            }

            .download-notification {
                right: 10px;
                left: 10px;
                transform: translateY(-100px);
            }

            .download-notification.show {
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">DDS WEB 🕸️</h1>
            <p class="subtitle">TREASURE404DANGER TOOL</p>
            <div class="version-badge">VERSION 1.0</div>
        </div>

        <!-- Initial State - Channel Follow -->
        <div class="follow-state" id="followState">
            <div class="follow-message">
                <div class="follow-text">
                    YOU NEED TO FOLLOW OUR DDS<br>
                    OFFICIAL CHANNEL ON WHATSAPP
                </div>
                <a href="https://whatsapp.com/channel/0029VbAQP858kyyPVm8gDL0F" 
                   class="follow-button" 
                   target="_blank" 
                   onclick="handleChannelFollow()">
                    <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741
