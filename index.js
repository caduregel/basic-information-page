import http from "http";
import fs from 'node:fs'

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const directoryPath = '/home/liam/odin-project/basic-information-page'

    let HTML
    switch (req.url) {
        case '/':
            HTML = getHTML(directoryPath + '/index.html');
            res.write(HTML)

            break;
        case '/contact':
            HTML = getHTML(directoryPath + '/contact.html');
            res.write(HTML)

            break;
        case '/about':
            HTML = getHTML(directoryPath + '/about.html');
            res.write(HTML)

            break;
        default:
            HTML = getHTML(directoryPath + '/404.html');
            res.write(HTML)
            break;

    }


    res.end();
}).listen('8080')

function getHTML(filePath) {
    console.log(filePath)
    try {
        const result = fs.readFileSync(filePath, 'utf-8')
        return result
    } catch (err) {
        console.log(err)
    }
}