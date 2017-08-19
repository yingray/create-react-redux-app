import React from 'react'
import Card from '../components/Card'

const HomePage = () => {
  const content = {
    title: 'Welcome to CRRS-APP',
    article:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere assumenda libero maiores rem veritatis quisquam saepe unde quam, molestiae iste in rerum magnam temporibus, impedit commodi dicta officiis aliquid?'
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
