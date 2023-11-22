import { CustomerField } from "@commercelayer/react-components/customers/CustomerField"
import type { Settings } from "HostedApp"
import {
  Package,
  CreditCard,
  Lifebuoy,
  MapPin,
  MapPinLine,
  ShoppingCart,
  Printer,
  User,
  FileText,
  FilePlus,
  Files,
  BookmarkSimple,
  Coins,
  ArrowFatLinesUp,
  ChalkboardTeacher,
  IconProps
} from "phosphor-react"
import { useTranslation } from "react-i18next"

import {
  Wrapper,
  Sidebar,
  MenuWrapper,
  LogoWrapper,
  FooterWrapper,
  Nav,
  EmailWrapper,
  Email,
  FullLogo
} from "./styled"

import NavLink from "#components/composite/NavLink"
// import ShoppingCartIcon from "#components/ui/icons/ShoppingCartIcon"
import Footer from "#components/ui/Footer"

interface Props {
  settings: Settings
  onClick?: () => void
}

const iconsProps:IconProps = {
  className:"w-5 h-5",
  weight:"light"
}


function Navbar({ settings, onClick }: Props): JSX.Element {
  const { t } = useTranslation()
  const { accessToken, logoUrl, companyName } = settings

  const menu = {
    addresses: {
      title: t("menu.account"),
      href: "",
      icon: <User  {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
      subTree: [
        {
          subKey: 'acc',
          title: t("menu.docs"),
          href: "",
          icon: <FileText {...iconsProps} />,
          comingSoon: false,
          accessToken,
          onClick
        },
        {
          subKey: 'acc',
          title: t("menu.addresses"),
          href: "/addresses",
          icon: <MapPinLine {...iconsProps} />,
          comingSoon: false,
          accessToken,
          onClick
        },
        {
          subKey: 'acc',
          title: t("menu.billing_address"),
          href: "/addresses",
          icon: <MapPin {...iconsProps} />,
          comingSoon: false,
          accessToken,
          onClick
        }
      ]
    },
    create_project: {
      title: t("menu.create_project"),
      href: "",
      icon: <FilePlus {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick
    },
    projects: {
        title: t("menu.my_projects"),
        href: "",
        icon: <Files {...iconsProps} />,
        comingSoon: false,
        accessToken,
        onClick,
        subTree: [
          {
            subKey: "proj",
            title: t("menu.configuration_guide"),
            href: "",
            icon: <Files {...iconsProps} />,
            comingSoon: false,
            accessToken,
            onClick
          },
          {
            subKey: "proj",
            title: t("menu.personal_projects"),
            href: "",
            icon: <Files {...iconsProps} />,
            comingSoon: false,
            accessToken,
            onClick
          },
          /* {
            subKey: 'proj',
            title: 'Ducamari Vino',
            accessToken,
            href: ""
          },
          {
            subKey: 'proj',
            title: 'Mountain beer',
            accessToken,
            href: ""
          } */
        ]
      },
    fav: {
      title: t("menu.favourite_projects"),
      href: "",
      icon: <BookmarkSimple {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    support: {
      title: t("menu.support"),
      href: "",
      icon: <Lifebuoy {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    economy: {
      title: t("menu.economic_area"),
      href: "",
      icon: <Coins {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    assets: {
      title: t("menu.assets"),
      href: "",
      icon: <ArrowFatLinesUp {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    academy: {
      title: t("menu.academy"),
      href: "",
      icon: <ChalkboardTeacher {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    wallet: {
      title: t("menu.wallet"),
      href: "/wallet",
      icon: <CreditCard {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <Package {...iconsProps} />,
      comingSoon: true,
      accessToken,
      onClick,
    },
    orders: {
      title: t("menu.orders"),
      href: "/orders",
      // icon: <ShoppingCartIcon />,
      icon: <ShoppingCart {...iconsProps} />,
      comingSoon: false,
      accessToken,
      onClick
    },
    customerService: {
      title: t("menu.customerService"),
      href: "/customer_service",
      icon: <Lifebuoy {...iconsProps} />,
      accessToken,
      onClick,
    },
  }

  return (
    <Sidebar data-cy="navbar">
      <Wrapper>
        <LogoWrapper>
          <FullLogo
            logoUrl={logoUrl}
            companyName={companyName}
            className="hidden lg:block"
            width="200"
          />
        </LogoWrapper>
        <MenuWrapper>
          <Nav>
            <ul className="flex flex-col gap-[18px]">
              {/* <NavLink id="orders" {...menu.orders} /> */}
              <NavLink id="addresses" {...menu.addresses} />
              <NavLink id="create_project" {...menu.create_project} />
              <NavLink id="projects" {...menu.projects} />
              <NavLink id="fav" {...menu.fav} />
              <NavLink id="support" {...menu.support} />
              <NavLink id="economy" {...menu.economy} />
              <NavLink id="assets" {...menu.assets} />
              <NavLink id="academy" {...menu.academy} />
              <NavLink id="orders" {...menu.orders} />
              <NavLink id="wallet" {...menu.wallet} />
            </ul>
          </Nav>
          {/* <NavLink id="customerService" {...menu.customerService} /> */}
          <EmailWrapper>
            {t("menu.loggedInAs")}
            <Email>
              <CustomerField name="email" attribute="email" tagElement="p" />
            </Email>
          </EmailWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </MenuWrapper>
      </Wrapper>
    </Sidebar>
  )
}

export default Navbar
