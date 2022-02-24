import React from 'react';

function Nav() {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-3 mb-3 ml-3 mr-3 fixed-top">
                <div class="navbar-brand">
                    <img src="../pic/icon.svg" alt="" />Aquntant
                </div>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
                    aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="menu">
                    <div class="navbar-nav ms-auto nav-tabs">
                        <a href="" class="nav-link ">Home</a>
                        <a href="" class="nav-link ">Transactions</a>
                        <a href="" class="nav-link ">Partners</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav