import React, { useContext } from 'react'

import Header from '../../components/Header';
import MovieSeats from '../../components/MovieSeats';
import Footer from '../../components/Footer';

import { MovieContext } from '../../providers/MovieProvider';


export default function Seats() {
 
  return (
    <>
    <Header />
    <MovieSeats />
    <Footer />
    </>
  )
}
