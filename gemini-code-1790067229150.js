// 1. Detect referral parameter from URL (e.g. ?ref=username)
const urlParams = new URLSearchParams(window.location.search);
const referrer = urlParams.get('ref');

if (referrer) {
    // Store the referrer's username in local storage for later registration
    localStorage.setItem('earnhub_referred_by', referrer);
    console.log("Referred by:", referrer);
}