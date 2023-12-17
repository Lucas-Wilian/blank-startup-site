import React from 'react';
import * as C from './styled';

export default function Footer() {
  return (
    <C.Container>
      <C.SectionFooter>
        <C.SectionFooterLinks>
          <C.TitleFooter>Tutorial</C.TitleFooter>
          <C.TextFooterLinks>Blog</C.TextFooterLinks>
          <C.TextFooterLinks>Youtube</C.TextFooterLinks>
          <C.TextFooterLinks>LinkedIn</C.TextFooterLinks>
          <C.TextFooterLinks>Instagram</C.TextFooterLinks>
          <C.TextFooterLinks>GitHub</C.TextFooterLinks>
        </C.SectionFooterLinks>
        <C.SectionFooterLinks>
          <C.TitleFooter>Sobre</C.TitleFooter>
          <C.TextFooterLinks>Softwares</C.TextFooterLinks>
          <C.TextFooterLinks>Instagram</C.TextFooterLinks>
          <C.TextFooterLinks>GitHub</C.TextFooterLinks>
          <C.TextFooterLinks>LinkedIn</C.TextFooterLinks>
        </C.SectionFooterLinks>
        <C.SectionFooterLinks>
          <C.TitleFooter>Contato</C.TitleFooter>
          <C.TextFooterLinks>
            Whatsapp: (99) 9 8510-5141
          </C.TextFooterLinks>
          <C.TextFooterLinks>
            Email: blank-startup@gmail.com
          </C.TextFooterLinks>
          <C.TextFooterLinks>Instagram</C.TextFooterLinks>
        </C.SectionFooterLinks>
        <C.SectionFooterLinks>
          <C.TitleFooter>Termos</C.TitleFooter>
          <C.TextFooterLinks>
            Politica de Privacidade
          </C.TextFooterLinks>
          <C.TextFooterLinks>
            Preferências de Cookies
          </C.TextFooterLinks>
        </C.SectionFooterLinks>
        <C.SectionFooterLinks>
          <C.TitleFooter>
            Mantenha-se atualizado sobre novos lançamentos, promoções
            e recursos, guias e estudos.
          </C.TitleFooter>
          <form>
            <input placeholder='Telefone: ' />
            <button>Cadastrar</button>
          </form>
        </C.SectionFooterLinks>
      </C.SectionFooter>
      <C.Footer>
        <p>© 2023 BLANK Startup, Inc.</p>
      </C.Footer>
    </C.Container>
  );
}
