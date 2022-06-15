document.getElementById('btn1').onclick = function (event) {
    event.preventDefault()
    var ngay = +document.getElementById('ngay').value;
    var thang = +document.getElementById('thang').value;
    var nam = +document.getElementById('nam').value;


    if (ngay === 1 && thang === 1) {
        ketQua = ' 31/12/' + nam
    } else if (ngay === 1 && thang === 2) {
        ketQua = '31/1/' + nam
    } else if (ngay === 1 && thang === 3) {
        ketQua = '28/2/' + nam
    } else if (ngay === 1 && thang === 4) {
        ketQua = '31/3/' + nam
    } else if (ngay ===1 && thang === 5) {
        ketQua = '30/4/' + nam
    } else if (ngay=== 1 && thang === 6) {
        ketQua = '31/5/' + nam
    } else if (ngay === 1 && thang === 7) {
        ketQua = '30/6/' + nam
    } else if (ngay === 1 && thang ===8) {
        ketQua = '31/7/' + nam
    } else if (ngay === 1 && thang === 9) {
        ketQua = '30/8/' + nam
    } else if (ngay === 1 && thang === 10) {
        ketQua = '31/9/' + nam
    } else if (ngay === 1 && thang === 11) {
        ketQua = '30/10/' + nam
    } else if (ngay === 1 && thang === 12) {
        ketQua = '31/11/' + nam
    } else {
        ketQua = --ngay+"/"+thang+'/'+nam
    }
   

    document.getElementById('homtruoc').innerHTML = ketQua
}


document.getElementById('btn2').onclick = function (event) {
    event.preventDefault()
    var thang = +document.getElementById('ngay2').value;
    var nam = +document.getElementById('nam2').value;
    var ketQua = '';
    switch (thang) {
        case 1: {
            ketQua = 31
        }; break;
        case 2: {
            ketQua = 28
        }; break;
        case 1: {
            ketQua = 31
        }; break;
        case 3: {
            ketQua = 30
        }; break;
        case 4: {
            ketQua = 31
        }; break;
        case 5: {
            ketQua = 30
        }; break;
        case 6: {
            ketQua = 31
        }; break;
        case 7: {
            ketQua = 30
        }; break;
        case 8: {
            ketQua = 31
        }; break;
        case 9: {
            ketQua = 30
        }; break;
        case 10: {
            ketQua = 31
        }; break;
        case 11: {
            ketQua = 30
        }; break;
        default: {
            ketQua = 31
        }
    }
    document.getElementById('songay').innerHTML = 'thang: ' + thang + '    ' + 'nam: ' + nam + ' co     ' + ketQua + ' ngay'
}

document.getElementById('btn3').onclick = function (event) {
    event.preventDefault()
    var so = +document.getElementById('so').value;
    var tram = Math.floor(so / 100);
    var chuc = Math.floor(so % 100 / 10);
    var donVi = so % 10;
    var ketQuatram = '';
    var ketQuachuc = '';
    var ketQuadoVi = '';
    console.log(ketQuatram)
    switch (tram) {
        case 1: {
            ketQuatram = 'mot';
        }; break;
        case 2: {
            ketQuatram = 'hai';
        }; break;
        case 3: {
            ketQuatram = 'ba';
        }; break;
        case 4: {
            ketQuatram = 'bon';
        }; break;
        case 5: {
            ketQuatram = 'nam';
        }; break;
        case 6: {
            ketQuatram = 'sau';
        }; break;
        case 7: {
            ketQuatram = 'bay';
        }; break;
        case 8: {
            ketQuatram = 'tam';
        }; break;
        case 9: {
            ketQuatram = 'chin';
        }; break;
    }
    switch (chuc) {
        case 1: {
            ketQuachuc = 'mot';
        }; break;
        case 2: {
            ketQuachuc = 'hai';
        }; break;
        case 3: {
            ketQuachuc = 'ba';
        }; break;
        case 4: {
            ketQuachuc = 'bon';
        }; break;
        case 5: {
            ketQuachuc = 'nam';
        }; break;
        case 6: {
            ketQuachuc = 'sau';
        }; break;
        case 7: {
            ketQuachuc = 'bay';
        }; break;
        case 8: {
            ketQuachuc = 'tam';
        }; break;
        case 9: {
            ketQuachuc = 'chin';
        }; break;
    }
    switch (donVi) {
        case 1: {
            ketQuadonVi = 'mot';
        }; break;
        case 2: {
            ketQuadonVi = 'hai';
        }; break;
        case 3: {
            ketQuadonVi = 'ba';
        }; break;
        case 4: {
            ketQuadonVi = 'bon';
        }; break;
        case 5: {
            ketQuadonVi = 'nam';
        }; break;
        case 6: {
            ketQuadonVi = 'sau';
        }; break;
        case 7: {
            ketQuadonVi = 'bay';
        }; break;
        case 8: {
            ketQuadonVi = 'tam';
        }; break;
        case 9: {
            ketQuadonVi = 'chin';
        }; break;
    }
    document.getElementById('sodoc').innerHTML = ketQuatram + ' tram ' + ketQuachuc + ' muoi ' + ketQuadonVi
}

document.getElementById('btn8').onclick = function (event) {
    event.preventDefault()
    var ketQua = ''
    // truong hoc
    var toax4 = +document.getElementById('toax4').value;
    var toay4 = +document.getElementById('toay4').value;

    // hs1
    var ten1 = document.getElementById('ten1').value;
    var toax1 = +document.getElementById('toax1').value;
    var toay1 = +document.getElementById('toay1').value;
    var d1 = Math.sqrt(((toax4 - toax1) ** 2) + ((toay4 - toay1) ** 2))

    //hs2
    var ten2 = document.getElementById('ten2').value;
    var toax2 = +document.getElementById('toax2').value;
    var toay2 = +document.getElementById('toay2').value;
    var d2 = Math.sqrt(((toax4 - toax2) ** 2) + ((toay4 - toay2) ** 2))

    // hs3
    var ten3 = document.getElementById('ten3').value;
    var toax3 = +document.getElementById('toax3').value;
    var toay3 = +document.getElementById('toay3').value;
    var d3 = Math.sqrt(((toax4 - toax3) ** 2) + ((toay4 - toay3) ** 2))

    if (d1 > d2 && d1 > d3) {
        ketQua = ten1
    } else if (d2 > d1 && d2 > d3) {
        ketQua = ten2
    } else if (d3 > d1 && d3 > d2) {
        ketQua = ten3;
    } else {
        ketQua = 'nhap lai so'
    }

    document.getElementById('inketqua').innerHTML = ketQua
}
