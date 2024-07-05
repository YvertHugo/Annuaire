package com.example.Annuaire.Repository;

import com.example.Annuaire.Entity.Fonction;
import com.example.Annuaire.Entity.Site;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FonctionRepository extends JpaRepository<Fonction, Long> {
    Optional<Fonction> findById(Long id);
}
