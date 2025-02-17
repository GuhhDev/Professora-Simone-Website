import { PortfolioItem } from '../../types';
import { PortfolioSection, PortfolioContainer, PortfolioGrid, PortfolioCard, CardContent } from './styles';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Xale Primavera",
    image: "https://images.unsplash.com/photo-1598871956222-26b66d6559ff?w=500&q=80",
    description: "Xale delicado em tons pastéis"
  },
  {
    id: 2,
    title: "Amigurumi Unicórnio",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=500&q=80",
    description: "Boneco de pelúcia em crochê"
  },
  {
    id: 3,
    title: "Bolsa Verão",
    image: "https://images.unsplash.com/photo-1617142108319-66c7ab45c711?w=500&q=80",
    description: "Bolsa de praia em crochê"
  }
];

export function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioContainer>
        <h2 className="text-3xl font-bold text-rose-700 text-center mb-8">Meus Trabalhos</h2>
        <PortfolioGrid>
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <img src={item.image} alt={item.title} />
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
