package com.example.Annuaire.Repository;

import com.example.Annuaire.Entity.Salarie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SalarieRepository extends JpaRepository<Salarie, Long> {
    Optional<Salarie> findById(Long id);
}
