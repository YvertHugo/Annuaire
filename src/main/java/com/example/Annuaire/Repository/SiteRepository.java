package com.example.Annuaire.Repository;

import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SiteRepository extends JpaRepository<Site, Long> {
    Optional<Site> findById(Long id);
}
