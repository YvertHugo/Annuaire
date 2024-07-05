package com.example.Annuaire.Service;

import com.example.Annuaire.Entity.Fonction;
import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;
import com.example.Annuaire.Repository.FonctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FonctionService implements IFonctionService {

    @Autowired
    private FonctionRepository fonctionRepository;

    @Override
    public List<Fonction> findAll() {
        return fonctionRepository.findAll();
    }

    @Override
    public Fonction save(Fonction fonction) {
        return fonctionRepository.save(fonction);
    }

    @Override
    public Fonction findById(Long id) {
        Optional<Fonction> optionalFonction = fonctionRepository.findById(id);
        return optionalFonction.orElse(null); // Vous pouvez gérer le cas où le salarié n'est pas trouvé ici
    }

    @Override
    public Fonction update(Fonction fonction) {
        Optional<Fonction> existingSite = fonctionRepository.findById(fonction.getId());
        if (existingSite.isPresent()) {
            return fonctionRepository.save(fonction);
        } else {
            // Handle the case where the site is not found
            throw new RuntimeException("Site not found with id: " + fonction.getId());
        }
    }
}