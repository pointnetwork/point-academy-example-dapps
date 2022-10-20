async function updateStorageValue() {
    const input = document.getElementById('valueInput');
    const display = document.getElementById('valueText');
    display.innerHTML = `<p>Updating SimpleStorage Value...</p>`;
    await window.point.contract.call({contract:'SimpleStorage', method:'store', params:[input.value]});
    display.innerHTML = input.value;
    input.value = null;
}