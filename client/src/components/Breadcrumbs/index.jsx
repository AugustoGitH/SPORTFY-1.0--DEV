import React, {useEffect, useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { useLocation, useNavigate } from 'react-router-dom';


function getBreadcrumbLinks(pathname, routesP){
    const pathParts  = pathname.split("/").filter(Boolean)
    const breadcrumb = pathParts.map((part, index, array)=>{
        const matchingRoute = routesP.find(links=> links.path === `/${part}`)
        return matchingRoute ? {
            path: index > 0 ? `/${array[index - 1]}/${part}` : `/${part}`,
            name: matchingRoute.name
        } : null
    })
    return breadcrumb.some(Boolean) ? breadcrumb.filter(Boolean) : null
}

export default function ActiveLastBreadcrumb({routes = []}) {
    const location = useLocation()
    const navigate = useNavigate()
    const breadcrumbLinks = getBreadcrumbLinks(location.pathname, routes)
    
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" style={{fontSize: ".9rem"}}>
        { breadcrumbLinks?.map((link, index, array)=> <Link underline="hover" key={index} href={link.path} color={index === array.length - 1 ? "primary" : "inherit" } onClick={()=> navigate(link.path)}>{link.name}</Link>) }
      </Breadcrumbs>
    </div>
  );
}