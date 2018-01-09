var platform = navigator.platform.toLowerCase();

if(platform.indexOf('win') >= 0){
    var $win = document.querySelector('div[data-version = "windows"]');
    $win.classList.remove('hidden');
}

else if (platform.indexOf('iphone') >= 0){
    var $iphone = document.querySelector('div[data-version = "ios"]');
    $iphone.classList.remove('hidden');
}

else if(platform.indexOf('linux') >= 0){
    var $linux = document.querySelector('div[data-version = "linux"]');
    $linux.classList.remove('hidden');
}

else if(platform.indexOf('mac') >= 0){
    var $mac = document.querySelector('div[data-version = "mac"]');
    $mac.classList.remove('hidden');
}

