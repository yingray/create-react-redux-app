import React from 'react'

const HomePage = () => {
  const content = {
    title: 'Welcome to CRRS-APP',
    article:
      'This project was bootstrapped with Create React App and Redux + SASS Structure.'
  }

  return (
    <main className="p-home">
      <h3 className="p-home__title">
        {content.title}
      </h3>
      <article className="p-home__article">
        {content.article}
      </article>
    </main>
  )
}

export default HomePage
