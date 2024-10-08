"use client"
import {Card , CardContent , CardHeader , CardFooter
} from "@/components/ui/card"
import {Header} from "@/components/auth/header"
import {Social} from "@/components/auth/Social"
import {BackButton} from "@/components/auth/back-button"

interface cardWrapperProps{
  children : React.ReactNode;
  headerLabel : string;
  backButtonLabel:string;
  backButtonHref:string;
  sideLinkLable?:string
  showSocial?:boolean
}

export const CardWrapper = ({
         children,
         headerLabel,
         backButtonLabel,
         backButtonHref,
         sideLinkLable,
         showSocial
}:cardWrapperProps)=>{
         return(

     <Card className="w-[400px] shadow-md">
        <CardHeader>
         <Header label={headerLabel}/>
        </CardHeader>
         <CardContent>
         {children}
          </CardContent>  
          {showSocial && (
           < CardFooter> 
           <Social/>
           </CardFooter> 
          )}
          <CardFooter>
            <BackButton
             label={backButtonLabel} 
             href={backButtonHref}
             sideLabel={sideLinkLable}
             />
          </CardFooter>
    </Card>
)
}