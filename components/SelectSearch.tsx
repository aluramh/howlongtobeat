import React, { useState } from 'react'
import { FC } from 'react'
import Select from 'react-select'
import { Game } from './types'

type Value = {
  label: string
  value: string
} | null

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: '100%'
  })
}

type Props = {
  games: Game[]
  handleInput(text: string): void
}

const SelectSearch: FC<Props> = props => {
  const { games = [], handleInput } = props

  const gameOptions = games.map(g => ({ label: g.name, value: g.id }))

  const gameSelected = (val: Value) => {
    console.log(val)
  }

  return (
    <Select
      aria-labelledby='aria-label'
      inputId='aria-example-input'
      name='aria-live-color'
      options={gameOptions}
      styles={customStyles}
      onInputChange={handleInput}
      onChange={gameSelected}
    />
  )
}

export default SelectSearch
