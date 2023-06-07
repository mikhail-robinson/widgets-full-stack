import { useState } from 'react'
import { addWidgets } from '../apiClient'

interface Props {
  loadWidgets: () => void
}

function addWidgetForm(props: Props) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidgets()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="widget-form">
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={languageData.name}
          className="text-slate-900"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id=""
          onChange={handleChange}
          value={languageData.description}
          className="text-slate-900"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default addWidgetForm
