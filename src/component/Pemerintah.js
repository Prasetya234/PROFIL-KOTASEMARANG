import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Pemerintah extends Component{
    render(){
        return(
            <div>
                <br/>
                    <h1 align="center">Pemerintah</h1>
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
                <Mui.Container fixed>
                    
                </Mui.Container>
                </div>
        )
    }
} 

export default Pemerintah;

