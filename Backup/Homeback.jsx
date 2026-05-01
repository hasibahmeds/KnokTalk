import { useNavigate } from 'react-router-dom';
import { FiMessageCircle, FiSend } from 'react-icons/fi';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/dashboard');
    };

    return (
        <div className="home-page">
            {/* ── main content (mirrors no-chat-selected-container) ── */}
            <div className="home-container">
                <div className="home-content">

                    {/* 3-D badge + pulse rings */}
                    <div className="home-3d-wrapper">
                        <div className="home-3d-badge">
                            <div className="home-badge-layer front">
                                <FiMessageCircle />
                            </div>
                            <div className="home-badge-layer middle" />
                            <div className="home-badge-layer back" />
                        </div>
                        <div className="home-pulse-rings">
                            <div className="home-pulse-ring ring-1" />
                            <div className="home-pulse-ring ring-2" />
                        </div>
                    </div>

                    {/* text + CTA */}
                    <div className="home-text-content">
                        <h1>Join KnokTalk</h1>
                        <button
                            id="home-get-started-btn"
                            className="home-get-started-btn"
                            onClick={handleGetStarted}
                        >
                            <FiSend className="home-btn-icon" />
                            Get Started
                        </button>
                    </div>

                </div>

                {/* background blobs */}
                <div className="home-background-decoration">
                    <div className="home-blob blob-1" />
                    <div className="home-blob blob-2" />
                    <div className="home-blob blob-3" />
                </div>
            </div>
        </div>
    );
};

export default Home;
