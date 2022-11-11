import {
  SkeletonHeader,
  SkeletonSubtitle,
  SkeletonRow,
  SkeletonCol,
  SkeletonTitle,
  SkeletonSpan,
  SkeletonCircle,
} from "src/components/composite/Skeleton/styled"
import { DesktopOnly, MobileOnly } from "src/components/ui/Common/styled"

export const SkeletonMainHeaderDesktop: React.FC = () => {
  return (
    <DesktopOnly>
      <SkeletonHeader className="h-[50px] mb-[64px]">
        <SkeletonTitle />
        <SkeletonRow className="items-center">
          <SkeletonSpan size={"medium"} />
          <SkeletonCircle className="w-8 h-8" />
        </SkeletonRow>
      </SkeletonHeader>
    </DesktopOnly>
  )
}

export const SkeletonMainHeaderMobile: React.FC = () => {
  return (
    <MobileOnly>
      <SkeletonHeader className="w-full h-[72px] mb-[42px]">
        <SkeletonCircle className="w-4 h-4" />
        <SkeletonTitle />
        <SkeletonCircle className="w-8 h-8" />
      </SkeletonHeader>
    </MobileOnly>
  )
}

export const SkeletonMainHeader: React.FC = () => {
  return (
    <>
      <SkeletonMainHeaderDesktop />
      <SkeletonMainHeaderMobile />
    </>
  )
}

interface SkeletonMainPageTitleProps {
  additionalContent?: React.ReactNode
}

export const SkeletonMainPageTitle: React.FC<SkeletonMainPageTitleProps> = ({
  additionalContent,
}) => {
  return (
    <SkeletonCol noGap className="pt-3 mb-8 lg:pt-0">
      <SkeletonRow centered className="h-[32px]">
        <SkeletonSubtitle size="small" />
      </SkeletonRow>
      {additionalContent && <div className="block">{additionalContent}</div>}
    </SkeletonCol>
  )
}
