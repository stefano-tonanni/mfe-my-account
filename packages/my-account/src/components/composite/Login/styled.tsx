import styled from "styled-components"
import tw from "twin.macro"

import { Logo } from "#components/ui/Footer/cl"
import { ErrorCss } from "#components/ui/form/Error"
import { InputCss } from "#components/ui/form/Input"

export const Main = styled.div`
  ${tw`flex flex-col flex-1 justify-center items-center text-center`}
`
export const Wrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col h-screen p-5 md:p-10 lg:px-20 lg:pb-10`}
`
export const Text = styled.p`
  ${tw` text-md font-bold text-gray-500`}
`

export const Form = styled.form`
  ${tw`pt-10`}
`
export const Button = styled.button`
  ${tw`text-ss font-bold text-white bg-auroflex-primary cursor-pointer text-center px-16 lg:px-20 h-11 shadow-sm disabled:opacity-50`}
`
export const LogoWrapper = styled.div`
  ${tw`flex justify-center`}
`
export const FullLogo = styled(Logo)`
  ${tw`p-0`}
`

export const StyledInput = styled.input`
  ${InputCss}
  ${tw`mb-5 w-72 max-w-full`}
  &.hasError {
      ${tw`border-red-400 border-2 focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-50`}
  }
`
