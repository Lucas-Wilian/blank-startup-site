import React from 'react';
import * as C from './styled';
import Logo from '../Logo/Logo';
import ButtonGlogal from '../Button/Button';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Header() {
  return (
    <C.Container>
      <Logo />
      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            {'Sobre' || <Skeleton />} <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent style={{ minWidth: '350px' }}>
          <C.DrowRowContent>
            <C.DropdownContentItems>
              <C.DropdownItem>
                <C.InfoIcon /> Sobre nós
              </C.DropdownItem>
              <C.DropdownItem>
                <C.QuestIcon />
                Por que BLANK?
              </C.DropdownItem>
              <C.DropdownItem>
                <C.ConfIcon />
                Como a funciona?
              </C.DropdownItem>
            </C.DropdownContentItems>
            <C.Line />
            <C.DropdownContentItems>
              <C.DropdownItem>
                <C.PuzzleIcon />
                Casos de Uso
              </C.DropdownItem>
              <C.DropdownItem>
                <C.SuportIcon />
                Suporte
              </C.DropdownItem>
            </C.DropdownContentItems>
          </C.DrowRowContent>
        </C.DropdownContent>
      </C.DropdownWrapper>
      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            {'Produtos' || <Skeleton />} <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent style={{ minWidth: '520px' }}>
          <C.DrowRowContent>
            <C.DropdownContentItems>
              <C.DropTitle> Produtos</C.DropTitle>
              <C.DropdownItem>
                <C.BusinessIcon /> BLANK para Negócios
              </C.DropdownItem>
              <C.DropdownItem>
                <C.UpdateIcon />
                Atualizações constantes
              </C.DropdownItem>

              <C.DropdownItem>
                <C.MoneyIcon />
                Preços
              </C.DropdownItem>
              <C.DropdownItem>
                <C.SuportIcon />
                Suporte
              </C.DropdownItem>
            </C.DropdownContentItems>
            <C.Line />
            <C.DropdownContentItems>
              <C.DropTitle>Soluções</C.DropTitle>
              <C.DropdownItem>
                <C.GlobeIcon />
                Atendimento em Qualquer Lugar
              </C.DropdownItem>
              <C.DropdownItem>
                <C.BagIcon />
                Gestão Central
              </C.DropdownItem>
              <C.DropdownItem>
                <C.SecurityIcon />
                Protocolos de Segurança
              </C.DropdownItem>
            </C.DropdownContentItems>
          </C.DrowRowContent>
          <C.DrodCard>
            <div>
              <h4>Pronto para começar a usar os produtos BLANK?</h4>
              <span>Damos suporte total para nossos clientes</span>
            </div>
            <section>
              <ButtonGlogal
                text='Começar'
                font_size='0.9rem'
                background={true}
              />
            </section>
          </C.DrodCard>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.DropdownWrapper>
        <C.DropMenu>
          <span>
            {'Social' || <Skeleton />} <C.IconArrow />
          </span>
        </C.DropMenu>
        <C.DropdownContent style={{ minWidth: '350px' }}>
          <C.DrowRowContent>
            <C.DropdownContentItems>
              <C.DropdownItem>
                <C.UserIcon />
                Comunidade BLANK
              </C.DropdownItem>
              <C.DropdownItem>
                <C.SuportIcon />
                Suporte
              </C.DropdownItem>
              <C.DropdownItem>
                <C.ContactIcon />
                Contato
              </C.DropdownItem>
            </C.DropdownContentItems>
            <C.Line />
            <C.DropdownContentItems>
              <C.DropdownItem>
                <C.NewsIcon />
                Noticias
              </C.DropdownItem>
              <C.DropdownItem>
                <C.PromotionIcon />
                Promoção
              </C.DropdownItem>
            </C.DropdownContentItems>
          </C.DrowRowContent>
        </C.DropdownContent>
      </C.DropdownWrapper>

      <C.ButtonGlogalContainer>
        <ButtonGlogal
          background={true}
          font_size='1rem'
          text='Saiba +'
          width='100%'
          height='100%'
        />
      </C.ButtonGlogalContainer>
    </C.Container>
  );
}
