import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useRouter, useLocation, useRoute, Link } from "wouter"

import { Wrapper, Icon, TitleWrapper, Title, ComingSoon, SubTreeUl} from "./styled"

import { AppContext } from "#providers/AppProvider"

type Props = Pick<Settings, "accessToken"> & {
  id?: string
  title?: string
  href?: string
  icon?: React.ReactNode
  comingSoon?: boolean,
  subTree?: any,
  items?: any,
  SubTree?: React.ReactNode,
  isSubTreeItem?: boolean
  onClick?: () => void
}

function ComingSoonBadge(): JSX.Element {
  return <ComingSoon>Soon</ComingSoon>
}

function NavLinkButton(props: Props): JSX.Element {
  const { title, href, icon, comingSoon, onClick, subTree, accessToken, isSubTreeItem} = props
  const router = useRouter()
  const [location] = useLocation()
  const hrefWithoutBase = href?.replace(router.base, "").split("?")[0]
  const isCurrentPage = (hrefWithoutBase) ? location.indexOf(hrefWithoutBase) >= 0 : false
  const isSubtree = (typeof subTree != 'undefined')

  return (
    <Wrapper
      isCurrentPage={isCurrentPage}
      comingSoon={comingSoon}
      onClick={onClick}
      isSubtree={isSubtree}
      isSubTreeItem={isSubTreeItem}
    >
      <Icon comingSoon={comingSoon}>{icon}</Icon>
      <TitleWrapper>
        <Title isSubTree={isSubTreeItem}>{title}</Title>
        {comingSoon && <ComingSoonBadge />}
      </TitleWrapper>
      {subTree && <SubTree items={subTree} accessToken={accessToken} />}
    </Wrapper>
  )
}

function SubTree(props: Props): JSX.Element {
  const { items, accessToken } = props
  const ctx = useContext(AppContext)

  return (
      <SubTreeUl>
      {items.map((item:any, index:any) => (
        <Link
        key={`${item.subKey}_${index}`}
        href={`${item.href}?accessToken=${accessToken}`}
        onClick={() => ctx?.closeMobileMenu()}
        >
          <NavLinkButton isSubTreeItem={true} {...item} />
        </Link>
      ))}
      </SubTreeUl>
  )
}

function NavLink(props: Props): JSX.Element {
  const { href, accessToken, comingSoon, subTree } = props

  const ctx = useContext(AppContext)

  if (comingSoon) return <NavLinkButton {...props} />

  return (
    <Link
      href={`${href}?accessToken=${accessToken}`}
      onClick={() => ctx?.closeMobileMenu()}
      >
      <NavLinkButton {...props} />
    </Link>
  )
}

export default NavLink



