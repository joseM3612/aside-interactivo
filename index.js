document.addEventListener("click", function(e){    
    if(e.target.matches('.hamburger')||e.target.matches('.hamburger *')){
        $hamburger.classList.toggle('is-active')
        $aside.classList.toggle('aside-width')
        $titles.forEach(title => {
            title.classList.toggle('block')
        })
    }

    if(e.target.matches(`.menu-item`)||e.target.matches(`.menu-item *`)){
        //console.log(e.target);
        if(e.target.matches('.home')||e.target.matches('.home *')){
            console.log('soy el home');
            $user.classList.remove('user-active')
            $user.classList.add('user')
            $message.classList.add('message')
            $message.classList.remove('message-active')
            $camera.classList.add('camera')
            $camera.classList.remove('camera-active')
            $settings.classList.add('settings')
            $settings.classList.remove('settings-active')
            
            $home.classList.remove('home')
            $home.classList.add('home-active')
        }
        if(e.target.matches('.user')||e.target.matches('.user *')){
            console.log('soy el user');
            $home.classList.remove('home-active')
            $home.classList.add('home')
            $message.classList.add('message')
            $message.classList.remove('message-active')
            $camera.classList.add('camera')
            $camera.classList.remove('camera-active')
            $settings.classList.add('settings')
            $settings.classList.remove('settings-active')

            $user.classList.remove('user')
            $user.classList.add('user-active')
        }

        if(e.target.matches('.message')||e.target.matches('.message *')){
            console.log('soy el message');
            $home.classList.remove('home-active')
            $home.classList.add('home')
            $user.classList.remove('user-active')
            $user.classList.add('user')
            $camera.classList.add('camera')
            $camera.classList.remove('camera-active')
            $settings.classList.add('settings')
            $settings.classList.remove('settings-active')

            $message.classList.remove('message')
            $message.classList.add('message-active')
        }

        if(e.target.matches('.camera')||e.target.matches('.camera *')){
            console.log('soy el camera');
            $home.classList.remove('home-active')
            $home.classList.add('home')
            $user.classList.remove('user-active')
            $user.classList.add('user')
            $message.classList.add('message')
            $message.classList.remove('message-active')
            $settings.classList.add('settings')
            $settings.classList.remove('settings-active')

            $camera.classList.remove('camera')
            $camera.classList.add('camera-active')
        }

        if(e.target.matches('.settings')||e.target.matches('.settings *')){
            console.log('soy el settings');
            $home.classList.remove('home-active')
            $home.classList.add('home')
            $user.classList.remove('user-active')
            $user.classList.add('user')
            $message.classList.add('message')
            $message.classList.remove('message-active')
            $camera.classList.add('camera')
            $camera.classList.remove('camera-active')

            $settings.classList.remove('settings')
            $settings.classList.add('settings-active')

        }

    }
    
});

