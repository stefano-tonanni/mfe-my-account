import styled from "styled-components"
import tw from "twin.macro"

interface WrapperProps {
  isCurrentPage: boolean
  comingSoon?: boolean
  isSubtree?: boolean
  isSubTreeItem?: boolean
}

export const Wrapper = styled.li<WrapperProps>`
  ${tw`flex h-8 items-center select-none h-auto`}
  ${({ comingSoon }) =>
    !comingSoon && tw`text-gray-500 hover:(cursor-pointer text-gray-600)`}
  ${({ comingSoon }) => comingSoon && tw`text-gray-400`}
  ${({ isCurrentPage }) => isCurrentPage && tw`text-black`}
  ${({ isSubtree }) => isSubtree && tw`flex-wrap h-auto`}
  ${({ isSubTreeItem }) => isSubTreeItem && tw`mb-2`}
`

interface IconProps {
  comingSoon?: boolean
}

export const Icon = styled.div<IconProps>`
  ${tw`mr-2`}
  ${({ comingSoon }) => comingSoon && tw`text-gray-300`}
`

export const SubTreeUl = styled.ul`
  ${tw`w-full pl-5 pt-3`}
`

export const TitleWrapper = styled.div`
  ${tw`flex items-center pr-3`}
`

interface TitleProps {
  isSubTree?: boolean
}

export const Title = styled.p<TitleProps>`
  ${tw`text-sm md:text-ss font-semibold uppercase leading-tight`}
  ${({ isSubTree }) => isSubTree && tw`normal-case leading-tight font-normal`}
`

export const ComingSoon = styled.span`
  ${tw`ml-1 uppercase px-[4px] py-[2px] text-[9px] leading-[9px] font-bold rounded text-white bg-orange-400`}
`

export const Description = styled.p`
  ${tw`text-ss`}
`
