import fs from 'fs';
import { cookie } from './local';

const year = 2023

const fileReader = (day: number, test = false): string[] => {
    const filename = '' + day +  (test ? '-test' : '-input') + '.txt'
    const file = fs.readFileSync(filename, 'utf8').toString().split("\n")
    return file
}

async function fetchInput (day: number) {
    const filename = getFilename(day)
    const https = require('https')
    const options = {
        hostname: 'adventofcode.com',
        method: 'GET',
        path: '/'+year+'/day/'+day+'/input',
        headers: {
            'Cookie': 'session='+cookie // din session cookie
        }
      }
    return new Promise ((resolve, reject) => {
        const req = https.request(options, (res:any)=> {
            res.on('data', async (d:any) => {
                fs.writeFileSync(filename, d)
            })
            res.on('end', () => resolve('ok')  )
        })
        req.on('error', (error:any) => {
            console.error(error)
            reject(error)
        })
        req.end() 
    })   
}

/*
    Will fetch input or read from local file if already fetched
    Must create a <day>-test.txt file to use test dataset
*/
export async function getInput (day: number, test=false)  {
    if (test) {
        console.log("Getting test file")
        return fileReader(day, true) 
    }
    if (fs.existsSync(getFilename(day))) {
        console.log("Getting local file")
        return fileReader(day);
    } else {
        console.log("Fetching file")
        const res = fetchInput(day).then(() => fileReader(day))
        return res
    }
}

const getFilename = (day: number) => ''+day+'-input.txt'
