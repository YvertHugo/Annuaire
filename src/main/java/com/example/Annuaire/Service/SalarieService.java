package com.example.Annuaire.Service;

import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Repository.SalarieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalarieService implements ISalarieService {

    @Autowired
    private SalarieRepository salarieRepository;

    @Override
    public List<Salarie> findAll() {
        return salarieRepository.findAll();
    }

    @Override
    public Salarie save(Salarie salarie) {
        return salarieRepository.save(salarie);
    }

    @Override
    public Salarie update(Salarie salarie) {
        Optional<Salarie> existingSalarie = salarieRepository.findById(salarie.getId());
        if (existingSalarie.isPresent()) {
            return salarieRepository.save(salarie);
        } else {
            // Handle the case where the salarie is not found
            throw new RuntimeException("Salarie not found with id: " + salarie.getId());
        }
    }

    @Override
    public Salarie findById(Long id) {
        Optional<Salarie> optionalSalarie = salarieRepository.findById(id);
        return optionalSalarie.orElse(null); // Vous pouvez gérer le cas où le salarié n'est pas trouvé ici
    }


}
