import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Kuliner extends Component{
    render(){
        return(
            <div>
                <br/>
                    <h1 align="center">Kuliner</h1>
                <br/>
                <center>
                <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Pemerintah">Pemerintah</Mui.Button>
                        <Mui.Button href="/Kuliner">Kuliner</Mui.Button>
                    </Mui.ButtonGroup>
                </center>
                <hr/>
                    <Carousel>
                        <img src="/tahu.jpg" width="1300" height="800"/>
                        <img src="/lumpia.jpg" width="1300" height="800"/>
                        <img src="/guudek.jpeg" width="1300" height="800"/>
                    </Carousel>
                    
            </div>
        )
    }
}

export default Kuliner;