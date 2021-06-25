import dynamic from 'next/dynamic'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Game } from '../components/types'
import Table from '../components/Table'
import {
  Box,
  Container,
  FormHelperText,
  FormLabel,
  Heading,
  Spacer,
  Stack as Flex
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup, FormControl } from '@chakra-ui/react'
import SelectSearch from '../components/SelectSearch'

function Home () {
  const [text, setText] = useState<string>('pokemon black')
  const [games, setGames] = useState<Game[]>([])

  const fetchGames = async (text: string) => {
    const { data } = await axios.get('/api/games', { params: { q: text } })
    setGames(data)
  }

  const handleInput = (val: string) => {
    if (val?.length > 3) {
      console.log(val)
      fetchGames(val)
    }
  }

  return (
    <Container maxW='container.lg' centerContent>
      <Head>
        <title>How long to beat?</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Game search form */}
      <FormControl id='game' mb='4'>
        <FormLabel>Search for a game</FormLabel>

        <Flex flexDirection='row' alignItems='center'>
          {/* Select Search */}
          <Box flex='1' mt='2' mr='2'>
            <SelectSearch games={games} handleInput={handleInput} />
          </Box>

          <Button variant='solid' onClick={() => fetchGames(text)}>
            Search
          </Button>
        </Flex>
      </FormControl>

      {/* List of games */}
      {games?.length > 0 && <Table data={games} />}
    </Container>
  )
}

export default Home
