import { FunctionComponent, useState } from 'react'
import { useStyletron } from 'baseui'

import { Block } from '../Block'
import Input from '../Input'
import Button from '../Button'
import Paragraph from '../Paragraph/index'

interface INewsletterProps {}

const Newsletter: FunctionComponent<INewsletterProps> = ({}) => {
  const [userEmail, setUserEmail] = useState(undefined)
  const [formIsValid, setFormIsValid] = useState(true)
  const [formIsSending, setFormIsSending] = useState(false)
  const [formIsSent, setFormIsSent] = useState(false)
  const [css, theme] = useStyletron()

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validateForm = (e: any) => {
    setUserEmail(e.target.value)
    re.test(String(e.target.value).toLowerCase())
      ? setFormIsValid(true)
      : setFormIsValid(false)
  }

  const submitForm = async () => {
    setFormIsSending(true)
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    })

    setFormIsSent(true)
    setFormIsSending(false)
  }

  return (
    <Block display="flex" flexDirection="row">
      <Block
        display="flex"
        flexDirection="column"
        flex="1 1 auto"
        className={css({ marginRight: '12px' })}
      >
        <Input
          placeholder="my@email.com"
          onChange={(e) => validateForm(e)}
          error={!formIsValid ? true : undefined}
        />
        {!formIsValid && (
          <Paragraph
            size="s"
            color="accent"
            className={css({ position: 'absolute', marginTop: '60px' })}
          >
            Please enter a valid eMail address.
          </Paragraph>
        )}
        {formIsSent && (
          <Paragraph
            size="s"
            color="#84CC16"
            className={css({ position: 'absolute', marginTop: '60px' })}
          >
            Thank you for signing up!
          </Paragraph>
        )}
      </Block>
      <Block display="flex" flex="0 0 auto">
        <Button
          onClick={() => {
            submitForm()
          }}
          type="secondary"
          isLoading={formIsSending}
          disabled={!formIsValid || !userEmail}
        >
          Sign up
        </Button>
      </Block>
    </Block>
  )
}

export default Newsletter
