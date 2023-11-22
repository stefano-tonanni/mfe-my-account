import { useTranslation } from "react-i18next"
import { useState } from 'react';
import { Wrapper, LogoWrapper, FullLogo, Main, Text, StyledInput, Button, Form} from "./styled"
import { Label } from "#components/ui/form/Label"

import { Redirect } from "wouter"

import { Base } from "#components/ui/Base"
import { FooterWrapper } from "#components/ui/Common/styled"
import { Container } from "#components/ui/Container"
import Footer from "#components/ui/Footer"



interface User {
  client_id?: string
  grant_type?: string
  password?: string
  username?: string
}
interface Props {
  statusCode?: string
  message?: string
  user?: User
}

function Login(props: Props): JSX.Element {
  const { t } = useTranslation();

  const [user, setUser] =  useState(props.user)
  const [logged, setLogged] = useState(false)

  const submit = (e:any) => {
    e.preventDefault()

    if(user){
      user.client_id = '8Y-uu5vTZAYdZqteYg5CGw2FBm1Wn1p0qG4CKZk89lY';
      user.grant_type = 'password';
    }

    console.log('sending in outta space')
    console.log(user)

      fetch('https://tonannyz.commercelayer.io/oauth/token', {
        method: 'POST',
        body: JSON.stringify({ ...user }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => {
        if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json()
      })
      .then(json => {
        console.log("token!")
        console.log(json)
        window.location.href = `/?accessToken=${json.access_token}`
        //setLogged(json.access_token)
      })
      .catch(error => {
        console.log("there has been an error")
        console.log(error)

      })


  }


  return (
    (logged)?
    <Redirect to={`/?accessToken=${logged}`} />
    :
    <Base>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <FullLogo className="self-center text-black md:pl-4 md:self-auto" />
          </LogoWrapper>
          <Main>
            <Text>Benvenuto nell'area privata di Auroflex</Text>
            <Text>Effettua login per creare, gestire e stampare i tuoi progetti</Text>

            <Form onSubmit={submit}>
            <StyledInput
              id="user"
              name="user[username]"
              type="email"
              placeholder="insert username"
              required
              onChange={e => setUser({ ...user, username: e.target.value })}
            />
            <StyledInput
              id="password"
              name="user[password]"
              type="password"
              placeholder="type your password"
              required
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
              <Button type="submit">{t("general.login")}</Button>
            </Form>
          </Main>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Wrapper>
      </Container>
    </Base>
  )
}

export default Login
