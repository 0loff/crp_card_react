export const analyticsTrack = (url) => {
    // sending clicked link url to analytics
    console.log('%c%s', 'color: #4CAF50', `The user followed the link ${url}` );
}