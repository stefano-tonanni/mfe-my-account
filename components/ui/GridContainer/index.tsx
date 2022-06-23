import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  className?: string
}

export const GridContainer: React.FC<Props> = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

const Wrapper = styled.div`
  ${tw`grid gap-6 mb-6 lg:grid-cols-2`}
`
