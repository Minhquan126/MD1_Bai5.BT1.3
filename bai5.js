function hinhtron(){
    let r = +document.getElementById('radius').value
    const pi = 3.14
    let dientich = r*r*pi
    let chuvi = 2*r*pi
    document.getElementById('dt').innerText = dientich
    document.getElementById('cv').innerText = chuvi


}