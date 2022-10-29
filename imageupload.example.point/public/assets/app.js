async function uploadImage() {
    const formData = new FormData()
    formData.append("myImage", fileupload.files[0]);
    const res = await window.point.storage.postFile(formData);
    // save the image file id in the contract
    await window.point.contract.call({contract: 'ImageStore', method: 'setStorageImage', params: [res.data]});
    // now fetch the image and update the dom
    await fetchImage()
}

async function fetchImage() {
    // fetch the storage layer image id from the contract 
    let {data: storageImageId} = await window.point.contract.call({contract: 'ImageStore', method: 'storageImage'});
    // set the src attribute of the image to render the uploaded image (for visual testing)
    document.getElementById('storageImg').setAttribute('src', `/_storage/${storageImageId}`)
}