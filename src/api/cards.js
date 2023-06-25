export const fetchCards = async () => {
    return await fetch('https://my-json-server.typicode.com/savayer/demo/posts')
        .then(res => res.json())
        .catch(e => {
            console.log('%c%s', 'color: #fced62', `Sorry, but you have some troubles with connection: ${e}`)
        })
}