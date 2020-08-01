import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <h3>
                <span className='red-title'>Buddies</span> movie is created
                using{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://yts.lt/api'
                >
                    {' '}
                    Yts.lt API
                </a>
            </h3>
            <p>
                By using this site you agree to accept yts User Agreement, which
                can be read{' '}
                <a
                    href='https://yts.lt/terms'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Here
                </a>
                .
            </p>
        </div>
    );
}

export default Footer;
