import { motion } from 'framer-motion';
import { PortfolioItem } from '../../types';
import { PortfolioSection, PortfolioContainer, PortfolioGrid, PortfolioCard, CardContent } from './styles';

export function Portfolio({ portfolioItems }: { portfolioItems: PortfolioItem[] }): JSX.Element {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioContainer>
        <motion.h2
          className="text-3xl font-bold text-rose-700 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meus Trabalhos
        </motion.h2>
        <PortfolioGrid>
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '256px', objectFit: 'cover' }} />
              <CardContent>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </CardContent>
            </PortfolioCard>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </PortfolioSection>
  );
}