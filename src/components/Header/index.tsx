import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderContainer, Nav, Logo, DesktopMenu, MenuItem } from './styles';

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['portfolio', 'videos', 'instagram'];

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Professora Simone</span>
        </Logo>
        
        <DesktopMenu>
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              href={`#${item}`}
              active={activeSection === item}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item}
            </MenuItem>
          ))}
        </DesktopMenu>

        <motion.button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </Nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item}
                  href={`#${item}`}
                  active={activeSection === item}
                  whileHover={{ x: 4 }}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'block', padding: '0.5rem 0' }}
                >
                  {item}
                </MenuItem>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}
