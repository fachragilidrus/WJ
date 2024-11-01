import React from 'react';
import './About.css';
import {picture} from '../../Image';

const About = () => {
  return (
    <section className="about-section">
      <div className="container-about">
        <div className="row">
          <div className="col-md-6">
            <img src={picture} alt="profilePicture" className="profile-image" />
            <div className="about-text">
              <p>Hai, saya Willy Situmorang! Saya seorang pengembang web yang bersemangat dengan fokus pada pembuatan situs web yang indah dan fungsional. Saya sangat suka bekerja dengan React dan teknologi modern lainnya. Dan saya lebih suka mengembangkan aplikasi mobile.</p>
              <p>Saya saat ini sedang belajar di Universitas Mikroskil dan aktif berkontribusi dalam proyek-proyek pengembangan web.</p>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Keahlian</h2>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Kotlin</li>
              <li>Python</li>
            </ul>

            <h2>Pengalaman</h2>
            <ul>
              <li>
                <strong>Universitas Mikroskil</strong>
                <br />
                Posisi: Mahasiswa
                <br />
                Periode: Agustus 2021 - Sekarang
                <br />
                Deskripsi: Mempelajari berbagai teknologi pengembangan web di Universitas Mikroskil.
              </li>
            </ul>

            <h2>Proyek</h2>
            <ul>
              <li>
                <a href="https://github.com/orgs/K23-DEVOPS/repositories">WJ Devops</a>
                <br />
                Proyek ini merupakan marketplace kecil untuk pelanggan kami yang ingin membeli produk kami.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;