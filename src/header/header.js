import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <h1 className='text-dark '> Z-index React</h1>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label" for="customSwitch1">Theme</label>
                </div>
        </nav>
    );
}

export default Header;
