function log(logstr) {
    document.getElementById('log').innerHTML += logstr+"\n";
}
async function f() {
    var ui8arr = [];
    const hash = 'QmPYL3uAqz8sGxdkCHZekgHXNzis7YyVu8VKjn6saiDhgz';

    const str = "Testing IPFS for PD-11"
    const ipfs = window.IpfsHttpClient("https://ipfs.infura.io:5001");
    const version = await ipfs.version().catch(x=>log(`Error: ${x}`))
    
    for await (const result of ipfs.cat(hash)){
        ui8arr.push(result);
    }

    var blob = new Blob(ui8arr , {type: "image/jpeg"});
    var url = URL.createObjectURL(blob);
    document.getElementById("image").src = url;  
}

async function upload() {
    const reader = new FileReader();
    reader.onloadend = async function() {
        const ipfs = window.IpfsHttpClient("https://ipfs.infura.io:5001");
        const buf = buffer.Buffer(reader.result) // Convert data into buffer
        const result = await ipfs.add(buf).catch(log);

        log(`cid=${result.path}`);

        let url = `https://ipfs.io/ipfs/${result.path}`
    }
    const photo = document.getElementById("photo");
    reader.readAsArrayBuffer(photo.files[0]);
}

async function setImage() {

    input = document.getElementById('fileinput').value;

    const ipfs = window.IpfsHttpClient("https://ipfs.infura.io:5001");
    log(`Adding ${input} to ipfs via Infura`);
    const result = await ipfs.add(input).catch(log)
    log(`cid=${result.path}`);
}

async function getImage() {
    var ui8arr = [];
    var hash = document.getElementById('hashImageId').value;

    if(hash == '') {
        alert('no hash selected');
        return;
    }

    console.log(hash);

    const ipfs = window.IpfsHttpClient("https://ipfs.infura.io:5001");
    
    for await (const result of ipfs.cat(hash)){
        ui8arr.push(result);
    }

    console.log(ui8arr);

    var blob = new Blob(ui8arr , {type: "image/jpeg"});
    var url = URL.createObjectURL(blob);
    document.getElementById("image").src = url;                
}
 
f();