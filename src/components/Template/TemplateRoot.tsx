'use client'

import React, { useEffect, useState } from 'react'
import { Menu } from '../Menu'
import { useMenu } from '../../shared/hooks/useMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faTruck,
  faDog,
  faCartPlus,
  faMoneyBill,
  faMoon,
  faSun,
  faWarehouse,
  faPaperclip,
  faChartLine,
  faTags,
} from '@fortawesome/free-solid-svg-icons'
import Body from '../Body'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/shared/hooks/useTheme'

type TemplateRootProps = {
  children: React.ReactNode
}

const menuItems = [
  {
    item: 'Home',
    link: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    item: 'Fornecedores',
    link: '/suppliers',
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
  {
    item: 'Produtos',
    link: '/products',
    icon: <FontAwesomeIcon icon={faTags} />,
  },
  {
    item: 'Vendas',
    link: '/sales',
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
  },
  {
    item: 'Pedidos',
    link: '/orders',
    icon: <FontAwesomeIcon icon={faCartPlus} />,
  },
  {
    item: 'Estoque',
    link: '/stock',
    icon: <FontAwesomeIcon icon={faWarehouse} />,
  },
  {
    item: 'Relatórios',
    link: '/reports',
    icon: <FontAwesomeIcon icon={faPaperclip} />,
  },
  {
    item: 'Gráficos',
    link: '/charts',
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
]

const returnNamePage = () => {
  const pathname = usePathname()
  const name = menuItems.find((item) => item.link === pathname)
  return name?.item
}

export default function TemplateRoot({ children }: TemplateRootProps) {
  const { isMenuOpen, toggleMenu } = useMenu()
  const { toggleTheme, theme, iconTheme } = useTheme()

  return (
    <>
      <Menu.Root isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}>
        <div className="flex w-full flex-col items-center justify-between gap-y-1.5">
          {menuItems.map((item, index) => {
            return (
              <Menu.Item
                index={index}
                item={item.item}
                link={item.link}
                icon={item.icon}
                isMenuOpen={isMenuOpen}
              />
            )
          })}
        </div>
        <button className="w-full" onClick={toggleTheme} title="Trocar tema">
          <FontAwesomeIcon
            icon={iconTheme}
            className="h-6 w-6 transition-all duration-150 hover:scale-110 hover:text-zinc-600/80 hover:dark:text-zinc-100/80"
          />
        </button>
      </Menu.Root>
      <Body namePage={returnNamePage()} toggleMenu={toggleTheme}>
        {children}
      </Body>
    </>
  )
}
