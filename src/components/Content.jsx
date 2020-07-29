import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Content() {
    let Body = {
        border: '1px solid #708090',
        borderRadius: '10px',
        display: 'inline-block',
        backgroundColor: ' rgb(255, 255, 255)',
        cursor: 'pointer',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(229, 231, 233)',
        borderImage: 'initial',
        height:'330px',
    }
    let Gambar = {
        borderRadius: '5px',
        margin: '5px',
        padding: '5px',
        border: '1px solid #708090',
        display: 'inline-block',
        backgroundColor: ' rgb(255, 255, 255)',
        cursor: 'pointer',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(229, 231, 233)',
        borderImage: 'initial',
    }
    let Gambar1 = {
        width: '140px',
        borderRadius: '5px'
    }
    let MT = {
        marginTop: '30px'
    }
    let Border = {
        border: '1px solid #708090',
        borderRadius: '5px',
        border: '1px solid #708090',
        display: 'inline-block',
        backgroundColor: ' rgb(255, 255, 255)',
        cursor: 'pointer',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(229, 231, 233)',
        borderImage: 'initial',
        padding:'2px',
    }
    let BR = {
        border: '1px solid #708090',
        borderRadius: '16px',
        textAlign: 'center',
        margin: '5px',
        padding: '6px 12px',
        display: 'inline-block',
        backgroundColor: ' rgb(255, 255, 255)',
        alignItems: 'center',
        cursor: 'pointer',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(229, 231, 233)',
        borderImage: 'initial',
        fontSize:'12px',
    }
    let A = {
        textDecoration:'none',
        color:'grey',
    }

return (
    <div style={Body}>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-7">
                    <h4><b>Kategori Pilihan</b></h4>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 text-center" style={Gambar}>
                                <div><img style={Gambar1} src={require('../images/makanan.png')} alt="Credit to Joshua Earle on Unsplash" /></div>
                            </div>
                            <div class="col-sm-3 text-center" style={Gambar}>
                                <div><img style={Gambar1} src={require('../images/figure.png')} alt="Credit to Joshua Earle on Unsplash" /></div>
                            </div>
                            <div class="col-sm-3 text-center" style={Gambar}>
                                <div><img style={Gambar1} src={require('../images/taslaki.png')} alt="Credit to Joshua Earle on Unsplash" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <h4>Top-Up & Tagihan</h4>
                    <div style={Border}>

                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <a href="#" style={A}>Pulsa</a>
                                </div>
                                <div class="col-sm">
                                    <a href="#" style={A}>Paket Data</a>
                                </div>
                                <div class="col-sm">
                                    <a href="#" style={A}>Listrik PLN</a>
                                </div>
                                <div class="col-sm">
                                    <a href="#" style={A}>Flight</a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-5">
                                    <form class="form-group">
                                        <label>
                                            Nomor Telepon :
                                            <input type="text" class="form-control mt-2" name="name" />
                                        </label>
                                    </form>
                                </div>
                                <div class="col-sm-4">
                                    <form class="form-group">
                                        <label for="exampleFormControlSelect1">Nominal</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Pilih</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </form>
                                </div>
                                <div class="col-sm">
                                    <button type="button" style={MT} class="btn btn-dark">Beli</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-4 ml-5">
                    <div class="row">
                        <div class="col-sm-2" style={BR}>
                        <i class="fa fa-align-justify"></i><a href="#" style={A}> Kategori</a>
                        </div>
                        <div class="col-sm-2" style={BR}>
                        <i class="fa fa-archive"></i><a href="#"style={A}> Semua Promo</a>
                        </div>
                        <div class="col-sm-2" style={BR}>
                        <i class="fa fa-korvue"></i><a href="#"style={A}> Kesehatan</a>
                        </div>
                        <div class="col-sm-2" style={BR}>
                        <i class="fa fa-align-justify"></i><a href="#"style={A}> Makanan & Minuman</a>
                        </div>
                        <div class="col-sm-1" style={BR}>
                        <i class="fa fa-align-justify"></i><a href="#"style={A}> Dapur</a>
                        </div>
                        <div class="col-sm-1" style={BR}>
                        <i class="fa fa-align-justify"></i><a href="#" style={A}> Emas</a>
                        </div>
                        <div class="col-sm-1" style={BR}>
                        <i class="fa fa-align-justify"></i><a href="#"style={A}> Pulsa</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Content