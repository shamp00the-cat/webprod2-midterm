import React from "react";

function About() {
  const headerStyle = {
    fontFamily: "Bungee, sans-serif",
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={headerStyle}>
        About
      </h1>
      <p>
        Hello, and welcome to my website! I'm an undergraduate student at Hunter
        College studying Emerging Media and Computer Science. I'm excited to
        share with you this web application I created as part of my midterm
        project for Web Production 2. I decided to take on the challenge of
        building this application using React.js, Bootstrap, and Vite, as I was
        eager to learn new tools and expand my web development skills. My choice
        to integrate the Spotify API into this project was fueled by my passion
        for music and a desire to tackle a challenging API to further my
        learning. On the Home page, you may search through Spotify's vast
        library by artist to display their albums. The Login page allows you to
        login to your Spotify account and display your personal Top 5 Artists.
        This was my first Vite/React application that I've coded completely by
        myself, so it was an incredible learning experience!
      </p>
    </div>
  );
}

export default About;
