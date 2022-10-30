async function uploadImage() {
    const formData = new FormData();
    formData.append("myImage", fileupload.files[0]);

    const res = await window.point.storage.postFile(formData);
    
    await window.point.contract.call({contract: 'ImageStore', 
                                      method: 'setStorageImage', 
                                      params: [res.data]})

    document.getElementById('storageImg').setAttribute('src', `/_storage/${res.data}`);
}

async function fetchImage() {
    const {data: storageImageId} = await window.point.contract.call({contract: "ImageStore", 
                                                                   method: 'storageImage'});

    document.getElementById('storageImg').setAttribute('src', `/_storage/${storageImageId}`)
}